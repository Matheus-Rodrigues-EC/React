import React, { useState } from 'react';
import Axios from 'axios';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario] = useState('');
  const [ erro, setErro ] = useState(false);

  function handlePesquisa(){axios.get(`https://api.github.com/users/${usuario}/repos`)
  .then(response => {
    const repositories = response.data;
    const repositoriesName = [];
    repositories.map((repository) => {
      repositoriesName.push(repository.name);
    });
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    setErro(false);
    history.push('./repositories')
  })
  .catch(err => {
    setErro(true);
  })
  }


  document.body.addEventListener('keyup', (event) => {
    if(event.code == 'Enter'){
      handlePesquisa();
    }
  })

  return (
    // O atributo onChage captura qualquer alteração no input
    <S.HomeConteiner>
      <S.content>
        <label for="userImput">Usuário: </label>
        <S.input placeholder="Usuário" className="usuarioInput" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.button type="button" onClick={handlePesquisa}>Pesquisar</S.button>
      </S.content>
      { erro ? <S.ErrorMessage>Ocorreu um erro. Tente novamente.</S.ErrorMessage> : '' }
    </S.HomeConteiner>
  )
}

export default App;
