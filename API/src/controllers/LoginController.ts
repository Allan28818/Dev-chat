import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from "yup";

import jwt from "jsonwebtoken";
import { AppErrors } from "../errors/AppErrors";

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
      throw new AppErrors(err);
    }

    const usersRepository = getCustomRepository(UsersRepository);
    const userAlreadyExists = await usersRepository.findOne({
      user_name,
      account_code,
      password
    });

    if(!userAlreadyExists) 
    {
      throw new AppErrors("User and another data does not exists", 401);
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