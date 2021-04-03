import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";

import "../styles/mobile/mobileSignUp.css";
import "../styles/web/webSignUp.css";

const SignUp = () => {

  const history = useHistory();

  const schema = yup.object().shape({
    user_name:
    yup.string()
    .min(4, "No mínimo 4 caracteres")
    .max(25, "No máximo 25 caracteres")
    .required("O nome de usuário é obrigatório"),

    first_name: 
    yup.string()
    .min(2, "No mínimo 4 caracteres")
    .required("O primeiro nome é obrigatório"),

    last_name:  
    yup.string()
    .min(2, "No mínimo 4 caracteres")
    .required("O sobrenome é obrigatório"),

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
    axios.post("http://localhost:2021/sign-up", values)
    .then(response => {
      const { data } = response;

      if(data) 
      {
        history.push("/login");
        alert("Sua conta foi criada com sucesso, agora você já pode fazer o login! 🔑");
      }
      else 
      {
        alert("Algum erro não esperado aconteceu, tente mais tarde... ⏰");
      }
    });
  };

  document.title = "Cadastro";

  return(
    <>
        <h1
        className = "sign-up-title"
        >
          Sign up
        </h1>
        <Formik
        initialValues = {{}}
        onSubmit = { handleSubmit }
        validationSchema = { schema }
        >
          <Form
          className = "sign-up-form">
            <label
            htmlFor = "user_name"
            className = "sign-up-label"
            >
              Nome de usuário
            </label>
            <Field 
            name = "user_name"
            autoComplete = "off"
            className = "sign-up-input"
            value = { undefined }
            />
            <ErrorMessage 
            name = "user_name"
            className = "error-message-sign-up"
            component = "span"
            />

            <label
            htmlFor = "first_name"
            className = "sign-up-label"
            >
              Primeiro nome
            </label>
            <Field 
            name = "first_name"
            className = "sign-up-input"
            autoComplete = "off"
            value = { undefined }
            />
            <ErrorMessage 
            name = "first_name"
            className = "error-message-sign-up"
            component = "span"
            />
            
            <label
            htmlFor = "last_name"
            className = "sign-up-label"
            >
              Sobrenome
            </label>
            <Field 
            name = "last_name"
            className = "sign-up-input"
            autoComplete = "off"
            value = { undefined }
            />
            <ErrorMessage 
            name = "last_name"
            className = "error-message-sign-up"
            component = "span"
            />

            <label
            htmlFor = "account_code"
            className = "sign-up-label"
            >
              Código de conta
            </label>
            <Field 
            name = "account_code"
            className = "sign-up-input"
            autoComplete = "off"
            type = "number"
            value = { undefined }
            />
            <ErrorMessage 
            name = "account_code"
            className = "error-message-sign-up"
            component = "span"
            value = { undefined }
            />

            <label
            htmlFor = "password"
            className = "sign-up-label"
            >
              Senha
            </label>
            <Field 
            name = "password"
            className = "sign-up-input"
            autoComplete = "off"
            type = "password"
            value = { undefined }
            />
            <ErrorMessage 
            name = "password"
            className = "error-message-sign-up"
            component = "span"
            />
            <button
            className = "sign-up-sender"
            type = "submit"
            >
              Cadastrar
            </button>

            <Link 
            to = "/login"
            className = "link-to-login">Login</Link>

            <p
            className = "copyright"
            >&copy; Allan Julie Fontes de Oliveira 2021</p>
          </Form>
        </Formik>      
    </>
  )
}

export default SignUp;