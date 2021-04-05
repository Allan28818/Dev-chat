import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AddPeopleRepository } from "../repositories/AddPeopleRepository";
import { UsersRepository } from "../repositories/UsersRepository";

import * as yup from "yup";
import { AppErrors } from "../errors/AppErrors";

class AddPeopleController {
  async add(request: Request, response: Response) {
    const { 
      my_id,
      person_name,
      person_account_code
     } = request.body;

     const schema = yup.object().shape({
       my_id: yup.string().required(),
       person_name: yup.string().required(),
       person_account_code: yup.number().required()
     });

     try 
     {
      await schema.validate(request.body, { abortEarly: false });
     } catch(err) 
     {
       throw new AppErrors(err);
     }

     const usersRepository = getCustomRepository(UsersRepository);
     const addPeopleRepository = getCustomRepository(AddPeopleRepository);

     const accountCodeAlreadyExists = await usersRepository
     .findOne({
        account_code: person_account_code
     });

     if(!accountCodeAlreadyExists) {
       throw new AppErrors("Account code doesn't exists", 401);
     }

     const createdPeople = addPeopleRepository.create({
      my_id,
      person_name,
      person_account_code
     });

     await addPeopleRepository.save(createdPeople);

     return response.status(201).json(createdPeople);
  }

  async store(request: Request, response: Response) {
    const { my_id } = request.body;

    const schema = yup.object().shape({
      my_id: yup.string().required()
    });

    try 
    {
      await schema.validate(request.body, { abortEarly: false });      
    } 
    catch(err) 
    {
      throw new AppErrors(err);
    }

    const addPeopleRepository = getCustomRepository(AddPeopleRepository);
    const allUsersInTheList = await addPeopleRepository.find({ my_id });

    if(!allUsersInTheList) 
    {
      throw new AppErrors("Owner list does not exists");
    }

    return response.json(allUsersInTheList);
  }
}

export { AddPeopleController };