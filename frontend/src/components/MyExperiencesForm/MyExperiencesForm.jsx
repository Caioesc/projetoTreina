import './MyExperiencesForm.css';
import { Row, Col, Form } from 'react-bootstrap';

function MyExperiencesForm(){
    return(
        <>
        <h1>Experiência: </h1> <br />
        <Row>
                <Col>
                    <Form.Control type="text" placeholder="Função: " />
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Empresa: " />
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Ano de início - fim: " />
                </Col>
            </Row>
            <br /> <hr /> <br />
        </>
    );
}

export default MyExperiencesForm;
