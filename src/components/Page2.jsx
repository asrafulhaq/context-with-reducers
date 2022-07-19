import { useContext } from "react"
import { Container } from "react-bootstrap";
import MsgContext from "../context/msgContext";


const Page2 = () => {
  const { msgState } = useContext(MsgContext);
   
  return (
    <>
        <Container>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam tempore eum, distinctio assumenda quae eos dicta in labore natus rem?</p>
          <h2>{msgState}</h2>
        </Container>
    </>
  )
}

export default Page2