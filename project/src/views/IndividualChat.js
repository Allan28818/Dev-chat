import { Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

import noMessages from "../images/noMessage.png";
import axios from "axios";

import "../styles/mobile/mobileIndividualChat.css";
import "../styles/web/webIndividualChat.css";

class IndividualChat extends Component {
  componentDidMount() {   
    this.getAnotherDataAndActivateMethods();    
  }

  state = {
    userData: JSON.parse(localStorage.getItem("response")), 
    anotherUserData: [],
    currentContactName: [],  
    pureMessages: [],
    messages: [],        
  }
 
  getAnotherDataAndActivateMethods = async () => 
  {
    const { recipient_account_code } = this.props.match.params;
    const contactFoundFromAPI = await 
    api
    .post("/find-user", { account_code: recipient_account_code });

    this.setState({ anotherUserData: contactFoundFromAPI.data });
    this.loadMessagesFromTheCurrentChat();

    document.title = `Chatting with ${this.state.anotherUserData.user_name}`;
  }
 
  loadMessagesFromTheCurrentChat = async () => 
  {    
    const messagesFromAPI = 
    await api
    .get(`/messages/${this.state.userData.id}/${this.state.anotherUserData.id}`);

    this.setState({ pureMessages: messagesFromAPI.data.allMessages });

    this.setState({ messages: this.state.pureMessages.sort(this.organizeMessages) });  
    this.lookForNewMessages(true);    

    
  }

  organizeMessages = ( 
    firtMessageTerm, 
    secondMessageTerm
  ) => {    
    return (
    new Date(firtMessageTerm.created_at) - 
    new Date(secondMessageTerm.created_at));
  }

    
  handleSubmit = async () => 
  {        
    const content = this.input.value;
    try {
      await axios
      .post(`http://localhost:2021/messages/${this.state.userData.id}/${this.state.anotherUserData.id}`, 
      {content});
    } catch(err) {
      alert('Falha no envio da mensagem!');      
    }
    console.log("input ref", this.input.value);
  }

  lookForNewMessages = async () => 
  {
    const { messages } = this.state;
    setInterval(async () => {
      
      const messagesFromAPI = await api
      .get(`/messages/${this.state.userData.id}/${this.state.anotherUserData.id}`);

      if(messages.length !== messagesFromAPI.data.allMessages.length) 
      {
        if(this.input.value === "") {

          window.location.reload(); 
        }
        
      }    
    }, 1000);    
    return;
  }
    
  handleRef = (inputRef) => {
    this.input = inputRef;
  }

  noMessagesComponent = () => {
    if(this.state.messages.length === 0) {
      return (
      <>
        <img 
        src = {noMessages} 
        className = "no-messages-img"/>
        <p
        className = "no-messages-text">Não existem mensagens aqui... envie a primeira!</p>
      </>);
    }    

    return (
      <a
      href = "#messageInput">
        <div
        className = "scroll-down">    
        </div>
      </a>
    );
  }


  render() {
    const { userData, anotherUserData } = this.state;
    return(
      <>
        <h1 id = "user-name-title">{ anotherUserData.user_name }</h1>
        <Link 
        className = "return-to-contacts"
        to = {`/contacts/${userData.token}`}>
          <i class="fas fa-arrow-left"></i>  
        </Link>        
        
        {
          this.state.messages.map(currentMessage => {            
            return(
              <article 
              key = { currentMessage.id }
              className = {
                currentMessage.from === userData.id
                ?
                "my-message"
                :
                "another-message"
              }>                
                <p
                className = "message-owner"
                >{ 
                currentMessage.from === userData.id 
                ? 
                "Você" 
                : 
                anotherUserData.user_name }</p>
                <p
                className = "message-content"
                >{ currentMessage.content }</p>                
              </article>
            )
          })
        }
        <this.noMessagesComponent />
         <form
        className = "send-message-wrapper"
        onSubmit = { this.handleSubmit }>
          
          <textarea 
          name = "messageToSend"
          id = "messageInput"
          placeholder = "Digite algo..."          
          autoComplete = "off"
          cols = "70"
          className = "individual-chat-input"
          ref = { this.handleRef }
          />
          <button
          className = "individual-chat-sender"
          type = "submit"
          onClick = { this.handleSubmit }>
            <i class="far fa-paper-plane"></i> 
          </button>
        </form>
  
      </>
      );
  }
}

export default IndividualChat;