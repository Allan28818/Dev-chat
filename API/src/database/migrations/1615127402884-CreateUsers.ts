import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1615127402884 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "users",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "user_name",
              type: "varchar"
            },
            {
              name: "first_name",
              type: "varchar"
            },
            {
              name: "last_name",
              type: "varchar"
            },
            {
              name: "account_code",
              type: "number"
            },
            {
              name: "password",
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
      await queryRunner.dropTable("users");
    }

}