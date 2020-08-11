
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
    
        default:
            return state;
    }

}