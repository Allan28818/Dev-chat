import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";
import createConnection from "../database";


describe("message", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
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

    expect(messageToSend.status).toBe(400);
  });
});