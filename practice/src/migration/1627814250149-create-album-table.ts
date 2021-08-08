import { MigrationInterface, QueryRunner } from 'typeorm';

export class createAlbumTable1627814250149 implements MigrationInterface {
	name = 'createAlbumTable1627814250149';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`test\`.\`album_photos_photo\` (\`albumId\` int NOT NULL, \`photoId\` int NOT NULL, INDEX \`IDX_fb5deea2817dea41af76b11fd1\` (\`albumId\`), INDEX \`IDX_d292b18c5fbb585c8ddb959ea8\` (\`photoId\`), PRIMARY KEY (\`albumId\`, \`photoId\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`ALTER TABLE \`test\`.\`photo\` ADD CONSTRAINT \`FK_c073d197b41cfbeb09835ca233c\` FOREIGN KEY (\`authorId\`) REFERENCES \`test\`.\`Author\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`test\`.\`album_photos_photo\` ADD CONSTRAINT \`FK_fb5deea2817dea41af76b11fd15\` FOREIGN KEY (\`albumId\`) REFERENCES \`test\`.\`Album\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
		);
		await queryRunner.query(
			`ALTER TABLE \`test\`.\`album_photos_photo\` ADD CONSTRAINT \`FK_d292b18c5fbb585c8ddb959ea81\` FOREIGN KEY (\`photoId\`) REFERENCES \`test\`.\`photo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`test\`.\`album_photos_photo\` DROP FOREIGN KEY \`FK_d292b18c5fbb585c8ddb959ea81\``
		);
		await queryRunner.query(
			`ALTER TABLE \`test\`.\`album_photos_photo\` DROP FOREIGN KEY \`FK_fb5deea2817dea41af76b11fd15\``
		);
		await queryRunner.query(
			`ALTER TABLE \`test\`.\`photo\` DROP FOREIGN KEY \`FK_c073d197b41cfbeb09835ca233c\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_d292b18c5fbb585c8ddb959ea8\` ON \`test\`.\`album_photos_photo\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_fb5deea2817dea41af76b11fd1\` ON \`test\`.\`album_photos_photo\``
		);
		await queryRunner.query(`DROP TABLE \`test\`.\`album_photos_photo\``);
		await queryRunner.query(`DROP TABLE \`test\`.\`Album\``);
		await queryRunner.query(`DROP TABLE \`test\`.\`Author\``);
		await queryRunner.query(
			`ALTER TABLE \`test\`.\`photo\` ADD CONSTRAINT \`FK_c073d197b41cfbeb09835ca233c\` FOREIGN KEY (\`authorId\`) REFERENCES \`test\`.\`author\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}
}
