import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`

const MessengerApp = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;

`


export default class App extends React.Component {
  
  render() {

     
  return (
    <MainContainer>
      <MessengerApp>
        <div>
          <p>Aqui vão as mensagens</p>
        </div>
        <div>
          <input type="text" placeholder="Usuário"></input>
          <input type="text" placeholder="Mensagem"></input>
          <button>Enviar</button>
        </div>
      </MessengerApp>
    </MainContainer>
  );
}
}
