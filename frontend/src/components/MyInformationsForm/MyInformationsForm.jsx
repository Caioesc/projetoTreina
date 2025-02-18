import './MyInformationsForm.css';

import {Button, Col, Form, Row} from 'react-bootstrap';


function MyInformationsForm(){
    return(
      <>
      <h1>Identificação: </h1> <br />
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTelefone">
            <Form.Label>Telefone:</Form.Label>
            <Form.Control type="tel" placeholder="Telefone" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Endereço:</Form.Label>
          <Form.Control placeholder="Informe sua rua" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCidade">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control placeholder='Informe sua cidade' />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEstado">
            <Form.Label>Estado:</Form.Label>
            <Form.Control placeholder='Informe seu estado' />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>CEP:</Form.Label>
            <Form.Control placeholder='Informe seu CEP' />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Aquivo da foto:</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>

      <br /> <hr /> <br />
      </>
    );
}

export default MyInformationsForm;
