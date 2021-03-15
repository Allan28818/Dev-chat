import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

const Login = () => {

  const history = useHistory();
  
  const schema = yup.object().shape({
    user_name:
    yup.string()
    .min(4, "No mínimo 4 caracteres")
    .max(25, "No máximo 25 caracteres")
    .required("O nome de usuário é obrigatório"),

    account_code: 
    yup.string()
    .min(4, "No mínimo 4 dígitos")
    .max(20, "No máximo 20 dígitos")
    .required("O código de conta é obrigatório"),

    password: 
    yup.string()
    .min(6, "No mínimo 6 caracteres")
    .required("A senha é obrigatória")
  });

  const handleSubmit = values => {
    axios.post("http://localhost:2021/login", values)
    .then(response => {
      const { data } = response;

      if(data) {
        const serializedData = JSON.stringify(data);
        localStorage.setItem("response", serializedData);

        history.push(`/home/${data.token}`);
      }
    });
  };

  return(
    <>
      <h1>Login page</h1>
      <Formik
      initialValues = {{}}
      onSubmit = { handleSubmit }
      validationSchema = { schema }
      >
        <Form>
            <label 
            htmlFor = "user_name"
            >
              Nome de usuário
            </label>
            <Field 
            name = "user_name"
            autoComplete = "off"
            value = { undefined }            
            />
            <ErrorMessage 
            name = "user_name"
            component = "span"
            />

            <label 
            htmlFor = "account_code"            
            >
              Código de conta
            </label>
            <Field 
            name = "account_code"
            autoComplete = "off"
            type = "number"
            value = { undefined }
            />
            <ErrorMessage 
            name = "account_code"
            component = "span"
            />
            
            <label 
            htmlFor = "password"
            >
              Senha
            </label>
            <Field 
            name = "password"
            autoComplete = "off"
            type = "password"
            value = { undefined }
            />
            <ErrorMessage 
            name = "password"
            component = "span" 
            />

            <button
              type = "submit"
            >
              Login
            </button>
        </Form>
      </Formik>
    </>
  )
}

export default Login;