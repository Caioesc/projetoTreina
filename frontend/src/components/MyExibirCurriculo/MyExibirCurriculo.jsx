import React, { useEffect, useState } from 'react';
import axios from "axios";

function MyExibirCurriculo(){

  const[users, setUsers]=useState([])

  useEffect(() =>{
    loadUsers();
  }, [])

  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8080/users")
    setUsers(result.data)
  }

  return (
    <div>
  <h1>Exibir Currículo</h1>
  {users.map((user, index) => (
    <div key={index}>
      <p className='text-end'><strong>Nome:</strong> {user.nome}</p>
      <p className='text-end'><strong>Telefone:</strong> {user.telefone}</p>
      <p className='text-end'><strong>Endereço:</strong> {user.rua}, {user.numero}, {user.bairro}, {user.cep}, {user.cidade}, {user.uf}</p>
      <hr />
    </div>
  ))}
</div>

  );
}

export default MyExibirCurriculo;
