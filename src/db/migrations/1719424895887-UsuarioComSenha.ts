import { MigrationInterface, QueryRunner } from 'typeorm';

export class UsuarioComSenha1719424895887 implements MigrationInterface {
  name = 'UsuarioComSenha1719424895887';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "usuarios" ADD "senha" character varying(10) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "nome" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "usuarios" ALTER COLUMN "nome" SET NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "senha"`);
  }
}
