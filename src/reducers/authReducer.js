import { types } from "../types/types";

 /* 
     {
         uid:wwer34324234234,
         name:"marcel"
     }
 */
export const authReducer = (state={},action)=>{

    switch (action.type) {
        case types.login:
            return {
                uid:action.payload.uid,
                name:action.payload.diplayName                
            }
                        
        case types.logout:
            return { }
                
        default:
            return state;
    }

}