import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from "yup";
import { AppErrors } from "../errors/AppErrors";

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

    const schema = yup.object().shape({
      user_name: yup.string().required(),
      first_name: yup.string().required(),
      last_name: yup.string().required(),
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

    if(userNameAlreadyExists || accountCodeAlreadyExists) 
    {
     throw new AppErrors("user already  or account code exists");
    }
    
    const userCreated = usersRepository.create({      
      user_name,
      first_name,
      last_name,
      account_code,
      password
    });

    await usersRepository.save(userCreated);

    response.status(201).json({
      id: userCreated.id,
      userCreated});
  }
}

export { SignUpController };