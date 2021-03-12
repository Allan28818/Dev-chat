import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { AddPeopleModel } from "./AddPeopleModel";
import { Message } from "./Message";

@Entity("users")
class User {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_name: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  account_code: number;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) 
    {
      this.id = uuid();
    }
  }
}

export { User };