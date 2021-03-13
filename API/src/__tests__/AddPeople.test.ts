import request from "supertest";
import { app } from "../app";
import createConnection from "../database";

describe("add people", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to add a people to a contact list", async () => {
    await request(app).post("/sign-up").send({
        user_name: "@userToAdd",
        first_name: "User",
        last_name: "to Add",
        account_code: 3100,
        password: "123456"      
    }); 

    const peopleToAdd = await request(app).post("/add-people").send({
      my_id: "yyyy",
      person_name: "User to add",
      person_account_code: 3100
    });

    expect(peopleToAdd.status).toBe(201);
  });

  it("Shoudn't be able to add a people to a contact list", async () => {
    const response = await request(app).post("/add-people").send({
      my_id: "y7y8y9y10",
      person_name: "User to add",
      person_account_code: 1010101
    });

    expect(response.status).toBe(401);
  })
});