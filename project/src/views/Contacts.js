import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import noContactsImage from "../images/noContacts.png";
import api from "../services/api";

import "../styles/general.css";
import "../styles/mobile/mobileContacts.css";
import "../styles/web/webContacts.css";



const Contacts = () => {

  const [responseFromAPI, setResponseFromAPI] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const userData = JSON.parse(localStorage.getItem("response"));

  useEffect(
    () => {
      loadContacts();
      document.title = "Contacts";
    }, []);


  const loadContacts = async () => {

    const response = await api.post("/list-the-users",
      {
        my_id: userData.id
      });

    setResponseFromAPI(response.data.reverse());
  }

  const redirectToTheChat = (currentUserFromTheList) => {
    const person_account_code = currentUserFromTheList.person_account_code;


    const pathToChat = `/chat/${userData.token}/${person_account_code}`;
    return pathToChat;
  }


  const NoContactsComponent = () => {
    if (responseFromAPI.length === 0) {
      return (
        <>
          <img
            src={noContactsImage}
            className="no-contacts-img" />
          <p
            className="no-contacts-text">Você ainda não tem nenhum contato...{" "}
            <Link to="/add-an-user"
            >adicione um contato</Link></p>
        </>);
    }

    return "";
  }


  return (
    <>
      <Navbar />
      <h1
        className="contacts-title"
      >
        Olá {userData.first_name} {userData.last_name}
      </h1>

      <div
        className="search-box">
        <input
          name="person_name"
          className="search-contact"
          onChange={event => setSearchTerm(event.target.value)}
          autoComplete="off"
          placeholder="Pesquise um contato..." />
        <a
          href='#'
          className="search-btn">
          <i className = "fas fa-search"></i>
        </a>
      </div>
      <div
        className="contacts-wrapper"
      >
        {
          responseFromAPI.filter(currentUserFromTheList => {
            if (searchTerm === "") {
              return currentUserFromTheList;
            }
            else if (currentUserFromTheList.person_name
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())) {
              return currentUserFromTheList;
            }
          }).map(currentUserFromTheList => {
            return (
              <Link
                key = { currentUserFromTheList.id }
                to = { redirectToTheChat(currentUserFromTheList) }
                className="contact-path"
              >
                <article                  
                  className="contact-wrapper"
                >
                  <h3
                    className="contact-name"
                  >

                    {currentUserFromTheList.person_name}
                  </h3>
                </article>
              </Link>
            )
          })

        }
      </div>
      <NoContactsComponent />
    </>
  )
};

export default Contacts;