import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Messages1615148101572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "messages",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "from",
              type: "varchar"
            },
            {
              name: "to",
              type: "varchar"
            },
            {
              name: "content",
              type: "varchar"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("messages");
    }

}
