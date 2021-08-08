import {MigrationInterface, QueryRunner} from "typeorm";

export class createPhotoMetaTable1627808652520 implements MigrationInterface {
    name = 'createPhotoMetaTable1627808652520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`test\`.\`photo_metadata\` ADD \`compressed\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`test\`.\`photo_metadata\` DROP COLUMN \`compressed\``);
    }

}
