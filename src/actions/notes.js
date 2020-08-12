import { db } from "../firebase/firebase-config";
import {types} from '../types/types';
import { loadNotes } from "../helpers/loadNotes";


export const startNewNotes=()=>{

    return async (dispatch,getState)=>{

        const uid=getState().auth.uid;
        
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

        const notas = await loadNotes(uid);
        dispatch(setNotas(notas));

    };
}


export const setNotas =(notas)=>({
    type: types.notesLoad,
    payload:notas

});