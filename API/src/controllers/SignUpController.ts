import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class SignUpController {
  async create(request: Request, response: Response) {
    const { 
      user_name,
      first_name,
      last_name,
      account_code,
      password
    } = request.body;
    const usersRepository = getCustomRepository(UsersRepository);

    const userNameAlreadyExists = await usersRepository.findOne({
      user_name
    });

    const accountCodeAlreadyExists = await usersRepository.findOne({
      account_code
    })

    if(userNameAlreadyExists && !accountCodeAlreadyExists) 
    {
      response
      .status(400)
      .json({
        error: "user already exists"
      });
    }
    else if(accountCodeAlreadyExists && !userNameAlreadyExists)
    {
      response.status(400).json({
        error: "account is already in use"
      })
    }
    else if(accountCodeAlreadyExists && userNameAlreadyExists) {
      response.status(400).json({
        error: "user name already exists and account is already in use"
      })
    }
    
    const userCreated = usersRepository.create({
      user_name,
      first_name,
      last_name,
      account_code,
      password
    });

    await usersRepository.save(userCreated);

    response.status(201).json(userCreated);
  }
}

export { SignUpController };