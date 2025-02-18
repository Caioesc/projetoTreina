import './MyAditionalForm.css'
import {Col, FloatingLabel, Form, Row} from 'react-bootstrap';

function MyAditionalForm(){
    return(
        <>
        <h1>Informações adicionais: </h1> <br />
        <Row className="g-2">
            <Col md>
                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Redes sociais"
                >
                    <Form.Select aria-label="Floating label select example">
                        <option>Selecione a rede social</option>
                        <option value="1">LinkedIn</option>
                        <option value="2">GitHub</option>
                    </Form.Select>
                </FloatingLabel>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Link">
                    <Form.Control type="url" placeholder="https://redesocial.com/seunomedeususario" />
                </FloatingLabel>
            </Col>
        </Col>
        </Row>
        </>
    );
}

export default MyAditionalForm;
