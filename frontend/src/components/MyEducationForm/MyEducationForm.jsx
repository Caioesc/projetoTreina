import './MyEducationForm';
import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

function MyEducationForm() {
    const [tipoFormacao, setTipoFormacao] = useState('');

    const handleTipoFormacaoChange = (e) => {
        setTipoFormacao(e.target.value);
    };

    return (
        <>
        <h1>Formação:</h1> <br />
            <Form.Select aria-label="Default select example" onChange={handleTipoFormacaoChange}>
                <option>Selecione um tipo de formação: </option>
                <option value="1">Ensino médio</option>
                <option value="2">Ensino Técnico</option>
                <option value="3">Graduação</option>
                <option value="4">Pós-graduação</option>
            </Form.Select>

            <br />
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="Curso: " />
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Instituição: " />
                </Col>
                <Col>
                    <Form.Control type="number" placeholder="Ano de formação: " />
                </Col>
            </Row>

            {tipoFormacao === '4' && (
                <>
                    <br />
                    <Form.Select aria-label="Título da Pós-graduação">
                        <option>Selecione um título: </option>
                        <option value="1">Especialização</option>
                        <option value="2">Mestrado</option>
                        <option value="3">Doutorado</option>
                    </Form.Select>
                </>
            )}
            <br /> <hr /> <br />
        </>
    );
}

export default MyEducationForm;
