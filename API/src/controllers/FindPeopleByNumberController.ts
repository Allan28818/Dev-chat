import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


class FindPeopleByNumberController {
  async findPeople(request: Request, response: Response) {
    const {
      account_code      
    } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);

    const userFound = await usersRepository.findOne({
      account_code
    });

    if(!userFound) {
      return response.status(400).json({
        error: "Account code doesn't exists"
      });
    }

    return response.json({
      id: userFound.id,
      user_name: userFound.user_name      
    })
  }
}

export { FindPeopleByNumberController };