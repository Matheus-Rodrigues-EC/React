import React, { useState } from 'react';
import Axios from 'axios';
import axios from 'axios';

function App(props) {
  const [ usuario, setUsuario] = useState('');
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    // O atributo onChage captura qualquer alteração no input
    <>
    <label for="userImput">Usuário: </label>
    <input placeholder="Usuário" className="usuarioInput" value={usuario} onChange={e => setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
    
  )
}

export default App;
