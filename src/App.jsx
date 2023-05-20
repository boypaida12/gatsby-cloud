import { Col, Container, Row } from "react-bootstrap";
import TextComponent from "./components/TextComponent";
import FormComponent from "./components/FormComponent";



function App() {
  return (
    <>
    <Container>
      <Row style={{maxWidth: "900px"}}>
        <Col>
          <TextComponent/>
        </Col>
        <Col md={6}>
          <FormComponent/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
