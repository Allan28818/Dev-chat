import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";
import createConnection from "../database";

describe("find people by number", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to find a user by the account code", async () => {
    await request(app).post("/sign-up").send({
      user_name: "@finder",
      first_name: "Find",
      last_name: "People",
      account_code: 900010,
      password: "123456"
    });

    const response = await request(app).post("/find-user").send({                  
      account_code: 900010,      
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("Shouldn't be able to find a user by a nonexsitent code", async () => {
    const response = await request(app).post("/find-user").send({                  
      account_code: 8898,      
    });

    expect(response.status).toBe(400);
  });
});