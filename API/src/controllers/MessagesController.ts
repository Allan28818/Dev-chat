import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";


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

     if(
        content.length === 0 
        || 
        content === null 
        ||
        content === undefined) {
        return response
        .status(401)
        .json({
          error: "your message has no content"
        })
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