import { MigrationInterface, QueryRunner } from 'typeorm';

export class Usuario1719424691940 implements MigrationInterface {
  name = 'Usuario1719424691940';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nome" character varying(100) NOT NULL, "email" character varying(70) NOT NULL, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "usuarios"`);
  }
}
