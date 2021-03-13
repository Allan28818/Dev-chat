import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";
import * as yup from "yup";

class MessagesController {
  async send(request: Request, response: Response) {
      const {
        from,
        to
      } = request.params;

      const { 
        content
      } = request.body;

      const messagesRepository = getCustomRepository(MessagesRepository);

      const schema = yup.object().shape({
        content: yup.string().required()
      });

      try 
      {
        await schema.validate(request.body, { abortEarly: false });
      } catch(err) 
      {
        return response.status(400).json(err);
      }


      const createdMessage = messagesRepository.create({
        from,
        to,        
        content
      });

      await messagesRepository.save(createdMessage);

      return response.status(201).json({
        createdMessage
      })
  }

  async store(request: Request, response: Response) {
    const { from, to } = request.params;

    const messagesRepository = getCustomRepository(MessagesRepository);

    const allMyMessages = await messagesRepository.find({
      from,
      to    
    });

    const allAnotherMessages = await messagesRepository.find({
      from: to,
      to: from
    });

    const allMessages = allMyMessages.concat(allAnotherMessages);
   
    if(!allAnotherMessages && !allMyMessages) 
    {
      return response
      .status(400)
      .json({
        error: "Any message in this conversation!"
      })
    }

    return response.json({
      allMessages      
    })
  }
}

export { MessagesController };