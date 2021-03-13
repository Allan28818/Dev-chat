import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from "yup";
import { AppErrors } from "../errors/AppErrors";

class FindPeopleByNumberController {
  async findPeople(request: Request, response: Response) {
    const {
      account_code      
    } = request.body;

    const schema = yup.object().shape({
      account_code: yup.number().required()
    });

    try 
    {
     await schema.validate(request.body, { abortEarly: false });
    } catch(err) 
    {
      throw new AppErrors(err);
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const userFound = await usersRepository.findOne({
      account_code
    });

    if(!userFound) {
      throw new AppErrors("User does exists");      
    }

    return response.json({
      id: userFound.id,
      user_name: userFound.user_name      
    })
  }
}

export { FindPeopleByNumberController };