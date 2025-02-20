import { useState } from 'react';
import './MyInformationsForm.css';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyInformationsForm() {

  const navigate = useNavigate(); // Chama a função useNavigate

  const [user, setUser] = useState({
    nome: "",
    telefone: "",
    rua: "",
    cidade: "",
    bairro: "",
    numero: "",
    uf: "",
    cep: ""
  });

  const { nome, telefone, rua, cidade, bairro, numero, uf, cep } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user)
    navigate("/exibir-curriculo");
  }

  return (
    <>
      <h1>Identificação: </h1> <br />
      <Form onSubmit={onSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control name="nome" value={nome} type="text" placeholder="Digite seu nome" onChange={onInputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTelefone">
            <Form.Label>Telefone:</Form.Label>
            <Form.Control name="telefone" value={telefone} type="tel" placeholder="Telefone" onChange={onInputChange} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Rua:</Form.Label>
          <Form.Control name="rua" value={rua} placeholder="Informe sua rua" onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Cidade:</Form.Label>
          <Form.Control name="cidade" value={cidade} placeholder="Informe sua cidade" onChange={onInputChange} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCidade">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control name="bairro" value={bairro} placeholder="Informe seu bairro" onChange={onInputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCidade">
            <Form.Label>Nº:</Form.Label>
            <Form.Control name="numero" value={numero} placeholder="Informe o Nº da sua casa" onChange={onInputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEstado">
            <Form.Label>UF:</Form.Label>
            <Form.Control name="uf" value={uf} placeholder="Informe o UF" onChange={onInputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>CEP:</Form.Label>
            <Form.Control name="cep" value={cep} placeholder="Informe seu CEP" onChange={onInputChange} />
          </Form.Group>
        </Row>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Aquivo da foto:</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>

      <br /> <hr /> <br />
    </>
  );
}

export default MyInformationsForm;
