import { Request, Response } from "express";


class UsersController {
  async create(request: Request, response: Response) {
    const { body } = request;
    console.log(body);
    response.json({message: "user created!"})
  }
}

export { UsersController };