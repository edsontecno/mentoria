import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AutenticacaoService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async create(email: string, senha: string) {
    let usuario;
    try {
      usuario = await this.usuarioService.findOne(2);
    } catch (error) {
      console.log(error);
    }

    if (!usuario) {
      throw new UnauthorizedException('usuário não localizado');
    }

    //bcrypt
    if (senha !== usuario.senha) {
      throw new UnauthorizedException('senha inválida');
    }

    const payload = {
      sub: usuario.id,
      nomeUsuario: usuario.nome,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
