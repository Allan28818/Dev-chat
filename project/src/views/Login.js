import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";

import background from "../images/loginBackground.jpg";

import "../styles/mobile/mobileLogin.css";
import "../styles/web/webLogin.css";

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
    .max(20, "No máximo 20 dígitos")
    .min(4, "No mínimo 4 dígitos")
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

        history.push(`/contacts/${data.token}`);
      }
    });
  };

  document.title = "Login";

  return(
    <>
    <img 
    src = { background } 
    alt = "background"
    className = "background-login" />
     <div
     className = "login-wrapper">
        <h1 className = "login-title">Login page</h1>
      <Formik
      initialValues = {{}}
      onSubmit = { handleSubmit }
      validationSchema = { schema }
      >
        <Form
        autoComplete="off"
        className = "login-form">
            <label 
            htmlFor = "user_name" 
            className = "login-label"           
            >
              Nome de usuário
            </label>
            <Field 
            name = "user_name"
            className = "login-input"
            autoComplete = "off"  
            spellCheck="false"                 
            value = { undefined }            
            />
            <ErrorMessage 
            name = "user_name"
            className = "error-message-login"
            component = "span"
            />

            <label 
            htmlFor = "account_code" 
            className = "login-label"                 
            >
              Código de conta
            </label>
            <Field 
            name = "account_code"
            className = "login-input"
            autoComplete = "off"            
            spellCheck="false"
            type = "number"
            value = { undefined }
            />
            <ErrorMessage 
            name = "account_code"   
            className = "error-message-login"         
            component = "span"
            />
            
            <label 
            htmlFor = "password"
            className = "login-label"
            >
              Senha
            </label>
            <Field 
            name = "password"
            className = "login-input"
            autoComplete = "off"
            type = "password"
            value = { undefined }
            />
            <ErrorMessage 
            name = "password"
            className = "error-message-login"
            component = "span" 
            />

            <button
              className = "sender-login"
              type = "submit"
            >
              Login
            </button>
            <Link 
            to = "/sign-up"
            className = "link-to-sign-up"
            >
              Sign up
            </Link>
            <p
            className = "copyright"
            >&copy; Allan Julie Fontes de Oliveira 2021</p>
        </Form>
      </Formik>

     </div>
      
    </>
  )
}

export default Login;