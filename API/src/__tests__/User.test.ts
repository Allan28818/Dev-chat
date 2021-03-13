import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";

import createConnection from "../database";

describe("sign-up", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create the user", async () => {
    const response = await request(app).post("/sign-up").send({      
        user_name: "@user1",
        first_name: "User",
        last_name: "Test",
        account_code: 123456789,
        password: "123456"      
    });

    expect(response.status).toBe(201);
  });

  
  it("Should be able to get a user logged and denie nonexistent user name",
   async () => {
    await request(app).post("/sign-up").send({      
        user_name: "@loginuser",
        first_name: "Login",
        last_name: "User",
        account_code: 123123123,
        password: "123456"      
    });

    const response = await request(app).post("/login").send({
      user_name: "@loginuser",
      account_code: 123123123,
      password: "123456"     
    });

    const noneExistentUser = await request(app).post("/login").send({
      user_name: "@anyUser",
      account_code: 20000,
      password: "20202020"    
    })

    expect(response.status).toBe(200);
    expect(noneExistentUser.status).toBe(401);
  })


  it("Should be able to denie the duplicated user name and account user", 
  async () => {
    await request(app).post("/sign-up").send({
        user_name: "@error_user_name",
        first_name: "User",
        last_name: "Error",
        account_code: 400,
        password: "123456"
    });

    const errorUserName = await request(app).post("/sign-up").send({
      user_name: "@error_user_name",
      first_name: "Internal",
      last_name: "Server Error",
      account_code: 500,
      password: "123456"
    });

    const errorAccountCode = await request(app).post("/sign-up").send({
      user_name: "@forbidden",
      first_name: "Not",
      last_name: "Allowed",
      account_code: 400,
      password: "123456"
    });

    expect(errorUserName.status).toBe(400);
    expect(errorAccountCode.status).toBe(400);

  });
});