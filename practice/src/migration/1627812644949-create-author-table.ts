import {MigrationInterface, QueryRunner} from "typeorm";

export class createAuthorTable1627812644949 implements MigrationInterface {
    name = 'createAuthorTable1627812644949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`test\`.\`Author\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`test\`.\`photo\` ADD \`authorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`test\`.\`photo\` ADD CONSTRAINT \`FK_c073d197b41cfbeb09835ca233c\` FOREIGN KEY (\`authorId\`) REFERENCES \`test\`.\`Author\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`test\`.\`photo\` DROP FOREIGN KEY \`FK_c073d197b41cfbeb09835ca233c\``);
        await queryRunner.query(`ALTER TABLE \`test\`.\`photo\` DROP COLUMN \`authorId\``);
        await queryRunner.query(`DROP TABLE \`test\`.\`Author\``);
    }

}
