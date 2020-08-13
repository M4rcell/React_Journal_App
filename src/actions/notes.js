import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import {types} from '../types/types';
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from '../helpers/fileUpload';

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

     }

}

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

        const activenote= getState().notes;

        const fileUrl = await fileUpload(file);

        console.log(fileUrl);


    }
}


