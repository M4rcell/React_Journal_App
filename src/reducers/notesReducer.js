
/* 
{  
    notes:[],
    active: null,
    active:{
        id:'aadasddvbvklvjbvjkfdudu',
        title:'',
        body:'',
        imageUrl:'',
        date:12/04/2013
    }
}

*/


import { types } from "../types/types";
import { act } from "@testing-library/react";

const initialState = {
    notes:[],
    active:null
}

export const notesReducer = (state=initialState,action) =>{

    switch (action.type) {
        
        case types.notesActive:
            return {
                ...state,
                active:{
                    ...action.payload
                }
            }
        case types.notesLoad:
           
            return {
                ...state,
                notes:[...action.payload]
            }
        case types.notesUpdated:
            return {
                ...state,
                notes:state.notes.map(
                    note => note.id === action.payload.id  //evaluar si la nbota es ingual a action 
                    ?action.payload.note// si id es el mismo
                    :note //else
                )
            }
    
        default:
            return state;
    }

}