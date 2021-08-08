import {MigrationInterface, QueryRunner} from "typeorm";

export class createPhotoMetaTable1627808402614 implements MigrationInterface {
    name = 'createPhotoMetaTable1627808402614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`test\`.\`photo_metadata\` (\`id\` int NOT NULL AUTO_INCREMENT, \`height\` int NOT NULL, \`width\` int NOT NULL, \`orientation\` varchar(255) NOT NULL, \`comment\` varchar(255) NOT NULL, \`photoId\` int NULL, UNIQUE INDEX \`REL_99f01ed52303cc16139d69f746\` (\`photoId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`test\`.\`photo_metadata\` ADD CONSTRAINT \`FK_99f01ed52303cc16139d69f7464\` FOREIGN KEY (\`photoId\`) REFERENCES \`test\`.\`photo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`test\`.\`photo_metadata\` DROP FOREIGN KEY \`FK_99f01ed52303cc16139d69f7464\``);
        await queryRunner.query(`DROP INDEX \`REL_99f01ed52303cc16139d69f746\` ON \`test\`.\`photo_metadata\``);
        await queryRunner.query(`DROP TABLE \`test\`.\`photo_metadata\``);
    }

}
