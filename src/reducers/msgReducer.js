import { useReducer } from "react";



export const initialMsg = 'Bangladesh';



// msg Reducer 
export const msgReducer = (state, { type, payload }) => {

        switch (type) {
            case 'MSG_UPDATE':
                return payload;

        
            default:
                return state;
        }


}







