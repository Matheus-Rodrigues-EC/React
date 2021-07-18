import React, { useState } from 'react';

function App(props) {
  return (
    <>
    <label for="userImput">Usuário: </label>
    <input name="Usuario" placeholder="Usuário" id="userImput" className="usuarioInput"/>
    <button type="button">Pesquisar</button>
    </>
    
  )
}

export default App;
