import { Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";


class IndividualChat extends Component {
  componentDidMount() {   
    this.getAnotherDataAndActivateMethods();    
  }

  state = {
    userData: JSON.parse(localStorage.getItem("response")), 
    anotherUserData: [],
    currentContactName: [],  
    pureMessages: [],
    messages: []
  }

  constructor(props) 
  {
    super(props);
    this.inputRef = React.createRef(); 
  }
 
  getAnotherDataAndActivateMethods = async () => 
  {
    const { recipient_account_code } = this.props.match.params;
    const contactFoundFromAPI = await 
    api
    .post("/find-user", { account_code: recipient_account_code });

    this.setState({ anotherUserData: contactFoundFromAPI.data });
    this.loadMessagesFromTheCurrentChat();
  }
 
  loadMessagesFromTheCurrentChat = async () => 
  {    
    const messagesFromAPI = 
    await api
    .get(`/messages/${this.state.userData.id}/${this.state.anotherUserData.id}`);

    this.setState({ pureMessages: messagesFromAPI.data.allMessages });

    this.setState({ messages: this.state.pureMessages.sort(this.organizeMessages) });  
    this.lookForNewMessages();    

    
  }

  organizeMessages = ( 
    firtMessageTerm, 
    secondMessageTerm
  ) => {    
    return (
    new Date(firtMessageTerm.created_at) - 
    new Date(secondMessageTerm.created_at));
  }

    
  handleSubmit = async (messageContent) => 
  {        
    await api.post(`/messages/${this.state.userData.id}/${this.state.anotherUserData.id}`, 
    messageContent);
  }

  lookForNewMessages = async () => 
  {
    const { messages } = this.state;
    setInterval(async () => {
      
      const messagesFromAPI = await api
      .get(`/messages/${this.state.userData.id}/${this.state.anotherUserData.id}`);

      if(messages.length !== messagesFromAPI.data.allMessages.length) 
      {
        window.location.reload();             
      }    
    }, 1000);
    return;
  }


  render() {
    const { userData, anotherUserData } = this.state;
    return(
      <>
        <Link to = {`/home/${userData.token}`}>Voltar</Link>        
        <h1 id = "user-name-title">{ anotherUserData.user_name }</h1>
        {
          this.state.messages.map(currentMessage => {            
            return(
              <article key = { currentMessage.id }>
                ---------------------------------------------
                <p
                className = {
                  currentMessage.from === userData.id
                  ?
                  "my-message"
                  :
                  "another-message"
                }>{ 
                currentMessage.from === userData.id 
                ? 
                "Você" 
                : 
                anotherUserData.user_name }</p>
                <p>{ currentMessage.content }</p>
                ---------------------------------------------
              </article>
            )
          })
        }
      
        <Formik 
        initialValues = {{}}
        onSubmit = { this.handleSubmit }>
         <Form>
           <Field 
           name = "content"
           className = "send-message-input"
           id = "send-message-input"
           autoComplete = "off"
           value = { undefined } 
           ref = { this.inputRef }        
           />           

           <button
           type = "submit"
           >enviar</button>
         </Form>
       </Formik>
      </>
      );
  }
}

export default IndividualChat;