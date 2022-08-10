import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableAuth1653064350394 implements MigrationInterface {
    name = 'createTableAuth1653064350394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`auth\` (\`id\` int NOT NULL AUTO_INCREMENT, \`address\` varchar(255) NOT NULL, \`profile\` json NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`auth\``);
    }

}
