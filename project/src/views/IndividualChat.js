import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

class IndividualChat extends Component {

  componentDidMount() {
    this.loadDetailsFromCurrentContact();
    this.setUserData();
  }

  state = {
    currentContactName: [],
    userToken: []
  }

  loadDetailsFromCurrentContact = async () => {
    const { recipient_account_code } = this.props.match.params;

    const userFound = await api.post("/find-user", { account_code: recipient_account_code });

    this.setState({ currentContactName: userFound.data.user_name });        
  }

  setUserData = () => {
    const userData = JSON.parse(localStorage.getItem("response"));
    return this.setState({ userToken: userData.token });
  }
 
  render() {
    return(
      <>
        <Link to = {`/home/${this.state.userToken}`}>Voltar</Link>
        <h1>{ this.state.currentContactName }</h1>
      </>
      );
  }
}

export default IndividualChat;