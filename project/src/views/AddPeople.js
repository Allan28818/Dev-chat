import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import api from "../services/api";

const AddPeople = () => {
  const schema = yup.object().shape({
    person_name: yup.string().required("O nome do contato é obrigatório"),
    person_account_code: yup.number().required("O código de conta é obrigatório")
  });

  const handleSubmit = async contactValues => 
  {
    const userDataFromStorage = JSON.parse(localStorage.getItem('response'));
    await api.post("/add-people", 
    {
      my_id: userDataFromStorage.id,
      person_name: contactValues.person_name,
      person_account_code: contactValues.person_account_code
    })
  };

  return(
    <>
      <h1>Adicione um contato</h1>
      <Formik
        initialValues = {{}}
        validationSchema = { schema }
        onSubmit = { handleSubmit }>
        <Form>
          <label 
          htmlFor = "person_name">
            Nome do contato
          </label>
          <Field 
          name = "person_name"
          autoComplete = "off"
          value = { undefined }
          />
          <ErrorMessage 
          name = "person_name"
          component = "span"
          />

          <label 
          htmlFor = "person_account_code">
            Código de conta
          </label>
          <Field 
          name = "person_account_code"
          autoComplete = "off"
          value = { undefined }
          type = "number"
          />
          <ErrorMessage 
          name = "person_account_code"
          component = "span"
          />

          <button
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