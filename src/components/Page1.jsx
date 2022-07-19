import { useContext } from "react";
import MsgContext from "../context/msgContext";


const Page1 = () => {

  const { msgState } = useContext(MsgContext);
    
  return (
    <div className="my-3">
        <hr />
        <h1>{ msgState }</h1>
    </div>
  )
};

export default Page1;