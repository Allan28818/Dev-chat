import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("add_people")
class AddPeopleModel {

  @PrimaryColumn()
  readonly id: string;

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