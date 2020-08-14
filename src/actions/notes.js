import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import {types} from '../types/types';
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from '../helpers/fileUpload';
import { auth } from 'firebase';

//react-journal

export const startNewNotes=()=>{

    return async (dispatch,getState)=>{

        const {uid}=getState().auth;
        //  const {uid}=getState().auth.uid;
        
        const newNote={

            title:'',
            body:'',
            date: new Date().getTime()
        }


        const doc=  await db.collection(`${uid}/journal/notes`).add(newNote)
        
        dispatch(activeNote(doc.id,newNote));

        dispatch(addNewNote(doc.id,newNote));

     }

}
 export const addNewNote=(id,note)=>({
   
    type:types.notesAddNew,
    payload:{
        id,
        ...note
    }
 })

export const activeNote = (id,note)=>({
    
    type:types.notesActive,
    payload:{
        id,
        ...note
    }

});

export const startLoadingNotes = (uid) =>{

    return async(dispatch)=>{

        const notes = await loadNotes(uid);
        dispatch(setNotas(notes));

    };
}


export const setNotas =(notes)=>({
    type: types.notesLoad,
    payload:notes

});


export const startSaveNote=(note)=>{

    return async(dispatch,getState)=>{

        const {uid} = getState().auth;

        if (!note.url) {

            delete note.url;
            
        }

        const notesToFireStore = {...note}


        delete notesToFireStore.id;// eliminar la propiedad id

        await db.doc(`${uid}/journal/notes/${note.id}`).update(notesToFireStore);

        dispatch(refresNote(note.id,notesToFireStore));

        Swal.fire('Saved ' ,note.title,'success');

    }

}

export const refresNote=(id,note)=>({

    type:types.notesUpdated,
    payload: {
        id,
    note:{
        id,
        ...note
    }
    }

})


export const startUploadImg=(file)=>{

    return async(dispatch,getState)=>{ //getState ver la nota actual

        const {active:activeNote}= getState().notes;
        //console.log(activeNote);
        
        // abrir loading de cargar
        Swal.fire({
            title:'Uploading.....',
            text:'Please wait....',
            allowOutSideClick:false,
            onBeforeOpen:()=>{
               Swal.showLoading();
            }
        })
 
        const fileUrl = await fileUpload(file);
      
        //console.log(fileUrl);
        // guaradar url en notas.URL
        activeNote.url = fileUrl;

        dispatch(startSaveNote(activeNote));
      
         // Cerrar loading de cargar
         Swal.close();

    }
}

//DELETE NOTE
export const StartDeleting =(id)=>{

    return async(dispatch,getState)=>{

        const uid= getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        
        dispatch(deleteNote(id));
    }

}

export const deleteNote=(id)=>({

    type:types.notesDelete,
    payload:id

})


export const noteLogout=()=>({

    type:types.notesLogoutCleaning
})
