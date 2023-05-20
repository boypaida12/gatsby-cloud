import { Col, Container, Row } from "react-bootstrap";
import TextComponent from "./components/TextComponent";



function App() {
  return (
    <>
    <Container>
      <Row style={{maxWidth: "900px"}}>
        <Col>
          <TextComponent/>
        </Col>
        <Col md={6}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus earum voluptatum ea accusamus odio placeat magnam numquam quod esse iste expedita, voluptate quae, harum omnis! In explicabo aliquid quibusdam nihil.
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
