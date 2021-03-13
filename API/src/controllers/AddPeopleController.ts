import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AddPeopleRepository } from "../repositories/AddPeopleRepository";
import { UsersRepository } from "../repositories/UsersRepository";

import * as yup from "yup";

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
       return response.status(400).json(err);
     }

     const usersRepository = getCustomRepository(UsersRepository);
     const addPeopleRepository = getCustomRepository(AddPeopleRepository);

     const accountCodeAlreadyExists = await usersRepository
     .findOne({
        account_code: person_account_code
     });

     if(!accountCodeAlreadyExists) {
       return response.status(401).json({
         error: "Account code doesn't exists"
       });
     }

     const createdPeople = addPeopleRepository.create({
      my_id,
      person_name,
      person_account_code
     });

     await addPeopleRepository.save(createdPeople);

     return response.status(201).json(createdPeople);
  }
}

export { AddPeopleController };