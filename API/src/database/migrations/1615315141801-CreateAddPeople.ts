import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddPeople1615132022891 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "add_people",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "my_id",
              type: "uuid"
            },
            {
              name: "person_name",
              type: "varchar"
            },
            {
              name: "person_account_code",
              type: "number"
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
      await queryRunner.dropTable("add_people");
    }

}
