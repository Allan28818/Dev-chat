import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from "yup";

import jwt from "jsonwebtoken";

class LoginController {
  async find(request: Request, response: Response) {
    const { 
      user_name,
      account_code,
      password
     } = request.body;

     const schema = yup.object().shape({
      user_name: yup.string().required(),
      account_code: yup.number().required(),
      password: yup.string().required()
    });

    try 
    {
     await schema.validate(request.body, { abortEarly: false });
    } catch(err) 
    {
      return response.status(400).json(err);
    }

    const usersRepository = getCustomRepository(UsersRepository);
    const userAlreadyExists = await usersRepository.findOne({
      user_name,
      account_code,
      password
    });

    if(!userAlreadyExists) 
    {
      return response.status(401).json({
        error: "User and another data does not exists"
      })
    }

    return response.json({
      user_name,
      first_name: userAlreadyExists.first_name,
      last_name: userAlreadyExists.last_name,
      account_code: userAlreadyExists.account_code,
      token: jwt.sign({ user_name }, "secret")
    })


  }
}

export { LoginController };