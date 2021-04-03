import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Navbar from "../components/Nav/Navbar";
import * as yup from "yup";
import api from "../services/api";

import "../styles/mobile/mobileAddPeople.css";
import "../styles/web/webAddPeople.css";

const AddPeople = () => {
  const schema = yup.object().shape({
    person_name: yup.string().required("O nome do contato é obrigatório"),
    person_account_code: yup
    .string()
    .min(4, "No mínimo 4 dígitos")
    .max(20, "No máximo 20 dígitos")
    .required("O código de conta é obrigatório")
  });

  const handleSubmit = async contactValues => 
  {
    const userDataFromStorage = JSON.parse(localStorage.getItem('response'));
    await api.post("/add-people", 
    {
      my_id: userDataFromStorage.id,
      person_name: contactValues.person_name,
      person_account_code: contactValues.person_account_code
    });

    return window.location.reload();
  };

  
  document.title = "Add Contacts";

  return(
    <>
      <Navbar />
      <h1
      className = "add-people-title"
      >
        Adicione um contato
      </h1>
      <Formik
        initialValues = {{}}
        validationSchema = { schema }
        onSubmit = { handleSubmit }>
        <Form
        className = "add-people-form-wrapper">
          <label 
          htmlFor = "person_name"
          className = "add-people-input-label">
            Nome do contato
          </label>
          <Field 
          name = "person_name"
          className = "add-people-input"
          autoComplete = "off"
          value = { undefined }          
          />
          <ErrorMessage 
          name = "person_name"
          className = "add-people-message-error"
          component = "span"
          />

          <label 
          htmlFor = "person_account_code"
          className = "add-people-input-label">
            Código de conta
          </label>
          <Field 
          name = "person_account_code"
          className = "add-people-input"
          autoComplete = "off"
          value = { undefined }
          type = "number"
          />
          <ErrorMessage 
          name = "person_account_code"
          className = "add-people-message-error"
          component = "span"
          />

          <button
          className = "add-people-sender"
          type = "submit"
          >
            Adicionar
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default AddPeople;