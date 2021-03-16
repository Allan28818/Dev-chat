import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";



class Contacts extends Component {
  
  state = {
    responseFromAPI: []
  }

  componentDidMount() {
    this.loadContacts();
  }

  loadContacts = async () => {
    const userData = JSON.parse(localStorage.getItem("response"));
    const response = await api.post("/list-the-users", 
    {
      my_id: userData.id
    });

    this.setState({ responseFromAPI: response.data });
  }

  redirectToTheChat = (currentUserFromTheList) => {
    const userData = JSON.parse(localStorage.getItem("response"));
    const person_account_code = currentUserFromTheList.person_account_code;

    
    const pathToChat = `/chat/${userData.token}/${person_account_code}`;
    return pathToChat;
  }

  render() {
    const { responseFromAPI } = this.state;
    
    return(
      <div>
        <h1>Bem vindo(a) Dev Chat</h1>
        {
          responseFromAPI.reverse(),
          responseFromAPI.map(currentUserFromTheList => {
            return (
              <article 
              key = { currentUserFromTheList.id }
              >
                <h3>
                  <Link
                  to = { this.redirectToTheChat(currentUserFromTheList) }>
                  { currentUserFromTheList.person_name }
                  </Link>
                </h3>
              </article>
            )
          })
        }
      </div>
    )
  };
 
}


export default Contacts;