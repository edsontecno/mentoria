import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;
}
