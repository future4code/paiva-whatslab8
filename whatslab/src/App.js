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

const JanelaMenssagens = styled.div`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 20px;
`

const InputsMenssagens = styled.div`
    display: grid;
    grid-template-columns: 2fr 7fr 1fr;
`

export default class App extends React.Component {
  
  render() {

     
  return (
    <MainContainer>
      <MessengerApp>
        <JanelaMenssagens>
          <p>Aqui vão as mensagens</p>
        </JanelaMenssagens>
        <InputsMenssagens>
          <input type="text" placeholder="Usuário"></input>
          <input type="text" placeholder="Mensagem"></input>
          <button>Enviar</button>
        </InputsMenssagens>
      </MessengerApp>
    </MainContainer>
  );
}
}
