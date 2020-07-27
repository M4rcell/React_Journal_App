import { types } from "../types/types";

 /* 
     {
         uid:wwer34324234234,
         name:"marcel"
     }
 */

/*  const initialState={
     uid:12345,
     name:'Luca',
     dir:{
          b:12
     }
} */

export const authReducer = (state={},action)=>{

    switch (action.type) {
        case types.login:
            return {
                uid:action.payload.uid,
                name:action.payload.displayName                
            }
                        
        case types.logout:
            return { }
                
        default:
            return state;
    }

}