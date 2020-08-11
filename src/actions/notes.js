import { db } from "../firebase/firebase-config";


export const startNewNotes=()=>{

    return async (dispatch,getState)=>{

        const uid=getState().auth.uid;
        
        const newNotes={

            title:'',
            body:'',
            date: new Date().getTime()
        }


        const doc=  await db.collection(`${uid}/journal/notes`).add(newNotes)
        
        console.log(doc);
    }

}