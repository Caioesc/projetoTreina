import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function MyExibirCurriculo() {
  const [user, setUser] = useState(null);
  const componentRef = useRef();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/1`);
    setUser(result.data);
  };

  const handlePrint = () => {
    const input = componentRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("curriculo.pdf");
      });
  };

  return (
    <div>
      <h1>Informações</h1>
      {user ? (
        <div ref={componentRef} style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
          <div style={{ textAlign: 'right' }}>
            <p><strong>Nome:</strong> {user.nome}</p>
            <p><strong>Telefone:</strong> {user.telefone}</p>
            <p><strong>Endereço:</strong> {user.rua}, {user.numero}, {user.bairro}, {user.cep}, {user.cidade}, {user.uf}</p>
          </div>
          <hr />
          <h2>Formação</h2>
          <div style={{ textAlign: 'right' }}>
            <p><strong>Tipo de formação:</strong> {user.tipo}</p>
            <p><strong>Curso:</strong> {user.curso}</p>
            <p><strong>Instituição de ensino:</strong> {user.instituicao}</p>
            <p><strong>Ano de conclusão:</strong> {user.anoFormacao}</p>
          </div>
          <hr />
          <h2>Experiência</h2>
          <div style={{ textAlign: 'right' }}>
            <p><strong>Função:</strong> {user.funcao}</p>
            <p><strong>Empresa:</strong> {user.empresa}</p>
            <p><strong>Ano de início-fim:</strong> {user.anoInicioFim}</p>
          </div>
          <hr />
          <h2>Informações adicionais:</h2>
          <div style={{ textAlign: 'right' }}>
            <p><strong>Rede Social:</strong> {user.redeSocial}</p>
            <p><strong>Link:</strong> {user.linkRedeSocial}</p>
          </div>
        </div>
      ) : (
        <p>Adicione informações primeiro!</p>
      )}
      <button onClick={handlePrint} className="btn btn-primary">Imprimir em PDF</button>
    </div>
  );
}

export default MyExibirCurriculo;
