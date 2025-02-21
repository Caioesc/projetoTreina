import { useState } from 'react';
import './MyInformationsForm.css';
import { Button, Col, Form, Row, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function MyInformationsForm() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    nome: "",
    telefone: "",
    rua: "",
    cidade: "",
    bairro: "",
    numero: "",
    uf: "",
    cep: "",
    funcao: "",
    empresa: "",
    anoInicioFim: "",
    tipo:"",
    curso: "",
    instituicao: "",
    anoFormacao: "",
    redeSocial: "",
    linkRedeSocial: ""
  });

  const [tipoFormacao, setTipoFormacao] = useState("");

  const { nome, telefone, rua, cidade, bairro, numero, uf, cep, funcao, empresa, anoInicioFim, tipo, curso, instituicao, anoFormacao, redeSocial, linkRedeSocial } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleTipoFormacaoChange = (e) => {
    setTipoFormacao(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
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

        <Form.Group className="mb-3" controlId="formGridRua">
          <Form.Label>Rua:</Form.Label>
          <Form.Control name="rua" value={rua} placeholder="Informe sua rua" onChange={onInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCidade">
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
       
        <br /> <hr /> <br />

        <h1>Formação:</h1> <br />
        
        <Row>
          <Col>
            <Form.Control name="tipo" value={tipo} type="text" placeholder="Tipo da formação" onChange={onInputChange} />
          </Col>
          <Col>
            <Form.Control name="curso" value={curso} type="text" placeholder="Curso: " onChange={onInputChange} />
          </Col>
          <Col>
            <Form.Control name="instituicao" value={instituicao} type="text" placeholder="Instituição: " onChange={onInputChange} />
          </Col>
          <Col>
            <Form.Control name="anoFormacao" value={anoFormacao} type="number" placeholder="Ano de formação: " onChange={onInputChange} />
          </Col>
        </Row>

        <br /> <hr /> <br />

        <h1>Experiência: </h1> <br />
        <Row>
          <Col>
            <Form.Control name="funcao" value={funcao} type="text" placeholder="Função: " onChange={onInputChange} />
          </Col>
          <Col>
            <Form.Control name="empresa" value={empresa} type="text" placeholder="Empresa: " onChange={onInputChange} />
          </Col>
          <Col>
            <Form.Control name="anoInicioFim" value={anoInicioFim} type="text" placeholder="Ano de início - fim: " onChange={onInputChange} />
          </Col>
        </Row>

        <br /> <hr /> <br />

        <h1>Informações adicionais: </h1> <br />
        <Col>
            <Form.Control name="redeSocial" value={redeSocial} type="text" placeholder="Rede social" onChange={onInputChange} />
          </Col>
          <Col>
            <Form.Control name="linkRedeSocial" value={linkRedeSocial} type="text" placeholder="Link da rede social" onChange={onInputChange} />
          </Col>
        <br />
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>

    </>
  );
}

export default MyInformationsForm;
