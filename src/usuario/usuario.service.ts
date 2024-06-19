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

  listaUsuarios = [
    {
      nome: 'Edson',
    },
    {
      nome: 'Guilherme',
    },
    {
      nome: 'Fernando',
    },
  ];

  create(createUsuarioDto: CreateUsuarioDto) {
    const entity = new Usuario();
    entity.id = '1';
    entity.email = createUsuarioDto.email;
    entity.nome = createUsuarioDto.nome;

    return this.usuarioRepository.save(entity);
  }

  findAll() {
    return this.listaUsuarios.filter((item) => item.nome.startsWith('E'));
  }

  findOne(id: number) {
    return this.listaUsuarios[id];
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    this.listaUsuarios[id].nome = updateUsuarioDto.nome;
    return this.listaUsuarios[id];
  }

  remove(id: number) {
    return delete this.listaUsuarios[id];
  }
}
