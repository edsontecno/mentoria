import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    throw new Error('teste');
    const entity = new Usuario();
    entity.email = createUsuarioDto.email;
    entity.nome = createUsuarioDto.nome;
    entity.senha = createUsuarioDto.senha;

    return this.usuarioRepository.save(entity);
  }

  findAll() {
    const listaUsuariosBD = this.usuarioRepository.find();
    return listaUsuariosBD;
  }

  findOne(id: number) {
    const usuario = this.usuarioRepository.findOne({
      where: { id },
    });
    return usuario;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number) {
    await this.usuarioRepository.delete(id);
  }
}
