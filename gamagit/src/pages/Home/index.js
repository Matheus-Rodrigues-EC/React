import React, { useState } from 'react';
import Axios from 'axios';
import axios from 'axios';
import * as S from './styled';

function App(props) {
  const [ usuario, setUsuario] = useState('');
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    // O atributo onChage captura qualquer alteração no input
    <S.container>
      <label for="userImput">Usuário: </label>
      <S.input placeholder="Usuário" className="usuarioInput" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.button type="button" onClick={handlePesquisa}>Pesquisar</S.button>
    </S.container>
    
  )
}

export default App;
