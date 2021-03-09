import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

describe("message", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  })

  it("Should be able to send a message to another user", async () => {
    const recipient = await request(app).post("/sign-up").send({
      user_name: "@recipent",
      first_name: "Recipient",
      last_name: "User",
      account_code: 20202021,
      password: "123456" 
    });

    const sender = await request(app).post("/sign-up").send({
      user_name: "@sender",
      first_name: "Sender",
      last_name: "User",
      account_code: 20212020,
      password: "123456" 
    });

    const messageToSend = await request(app)
    .post(`/messages/${sender.body.id}/${recipient.body.id}`)
    .send({
      content: "Hello world"
    });

    expect(messageToSend.status).toBe(201);
  });

  it("Shouldn't be able to send a message to another user", async () => {
    const recipient = await request(app).post("/sign-up").send({
      user_name: "@recipent2",
      first_name: "Recipient2",
      last_name: "User",
      account_code: 200100,
      password: "123456" 
    });

    const sender = await request(app).post("/sign-up").send({
      user_name: "@sender2",
      first_name: "Sender2",
      last_name: "User",
      account_code: 100200,
      password: "123456" 
    });

    const messageToSend = await request(app)
    .post(`/messages/${sender.body.id}/${recipient.body.id}`)
    .send({
      content: ""
    });

    expect(messageToSend.status).toBe(401);
  });
});