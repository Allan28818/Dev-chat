import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";



const Contacts = () => {

  const [responseFromAPI, setResponseFromAPI] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(
    () => {
      loadContacts()
    }, []) 
  

  const loadContacts = async () => {
    const userData = JSON.parse(localStorage.getItem("response"));
    const response = await api.post("/list-the-users", 
    {
      my_id: userData.id
    });

    setResponseFromAPI(response.data);    
  }

  const redirectToTheChat = (currentUserFromTheList) => {
    const userData = JSON.parse(localStorage.getItem("response"));
    const person_account_code = currentUserFromTheList.person_account_code;

    
    const pathToChat = `/chat/${userData.token}/${person_account_code}`;
    return pathToChat;
  }
    
  return(
    <div>
      <h1>Bem vindo(a) Dev Chat</h1>
      <input 
      name = "person_name"
      onChange = {event => setSearchTerm(event.target.value)}
      autoComplete = "off"
      placeholder = "Pesquise um contato..."/>
      {
        responseFromAPI.filter(currentUserFromTheList => 
          {
            if(searchTerm === "") 
            {
              return currentUserFromTheList;
            }
            else if(currentUserFromTheList.person_name
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase()))
            {              
              return currentUserFromTheList;
            }
          }).map(currentUserFromTheList => {
              return (
                <article 
                key = { currentUserFromTheList.id }
                >
                  <h3>
                    <Link
                    to = { redirectToTheChat(currentUserFromTheList) }>
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
 


// map(currentUserFromTheList => {
//   return (
//     <article 
//     key = { currentUserFromTheList.id }
//     >
//       <h3>
//         <Link
//         to = { this.redirectToTheChat(currentUserFromTheList) }>
//         { currentUserFromTheList.person_name }
//         </Link>
//       </h3>
//     </article>
//   )
// })

export default Contacts;