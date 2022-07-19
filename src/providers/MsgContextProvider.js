import { useReducer } from "react";
import MsgContext from "../context/msgContext";
import { initialMsg, msgReducer } from "../reducers/msgReducer";




// create MSG context provider
const MsgContextProvider = ({ children }) => {

    const [msgState, dispatch] = useReducer( msgReducer,  initialMsg );


    return (
        <MsgContext.Provider value={ { msgState,  dispatch } }>
            {children}
        </MsgContext.Provider>
    );    


}


export default MsgContextProvider;