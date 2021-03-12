import { Column, CreateDateColumn, Entity, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id)
    {
      this.id = uuid();
    }
  }
}

export { Message };