import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";

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

  return(
    <>
      <h1>Sign up</h1>
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
          htmlFor = "first_name"
          >
            Primeiro nome
          </label>
          <Field 
          name = "first_name"
          autoComplete = "off"
          value = { undefined }
          />
          <ErrorMessage 
          name = "first_name"
          component = "span"
          />
          
          <label
          htmlFor = "last_name"
          >
            Sobrenome
          </label>
          <Field 
          name = "last_name"
          autoComplete = "off"
          value = { undefined }
          />
          <ErrorMessage 
          name = "last_name"
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
          value = { undefined }
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
            Cadastrar
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default SignUp;