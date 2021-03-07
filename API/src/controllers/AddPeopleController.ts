import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AddPeopleRepository } from "../repositories/AddPeopleRepository";
import { UsersRepository } from "../repositories/UsersRepository";


class AddPeopleController {
  async add(request: Request, response: Response) {
    const { 
      person_name,
      person_account_code
     } = request.body;

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
      person_name,
      person_account_code
     });

     await addPeopleRepository.save(createdPeople);

     return response.status(201).json(createdPeople);
  }
}

export { AddPeopleController };