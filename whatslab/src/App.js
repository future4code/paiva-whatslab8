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
  box-sizing: border-box;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;

`
const WindowMessages = styled.div`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column-reverse;
    padding: 20px;
`

const InputMessages = styled.div`
    display: grid;
    grid-template-columns: 2fr 7fr 1fr;
`

class App extends React.Component {

  state = {
    messages: [],
    userValue: "",
    messageValue: ""
  }

  onChangeUserValue = (event) => {
    this.setState({userValue: event.target.value})
  }

  onChangeMessageValue = (event) => {
    this.setState({messageValue: event.target.value})
  }

  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
    }

    const newMessageArray = [newMessage, ...this.state.messages]

    this.setState({messages: newMessageArray,  userValue: '', messageValue: ''})
  }

  render() {
      
  return (
    <MainContainer>
      <MessengerApp>
        <WindowMessages>
          {this.state.messages.map((message) => {
            return <p><strong>{message.user}</strong>: {message.text}</p>
          })}
        </WindowMessages>
        <InputMessages>
          <input onChange={this.onChangeUserValue} 
            value={this.state.userValue} 
            placeholder="Usuário"></input>
          <input onChange={this.onChangeMessageValue}
            value={this.state.messageValue}
            placeholder="Mensagem"></input>
          <button onClick={this.sendMessage}>Enviar</button>
        </InputMessages>
      </MessengerApp>
    </MainContainer>
  );
  }
}

export default App;