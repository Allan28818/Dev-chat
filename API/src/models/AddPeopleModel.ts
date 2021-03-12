import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("add_people")
class AddPeopleModel {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  my_id: string;

  @Column()
  person_name: string;

  @Column()
  person_account_code: number;

  @CreateDateColumn()
  created_at: Date;


  constructor() {
    if(!this.id) 
    {
      this.id = uuid();
    }
  }
}

export { AddPeopleModel };