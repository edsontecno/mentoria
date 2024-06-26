import { Body, Controller, Post } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { CreateAutenticacaoDto } from './dto/create-autenticacao.dto';

@Controller('autenticacao')
export class AutenticacaoController {
  constructor(private readonly autenticacaoService: AutenticacaoService) {}

  @Post()
  autenticar(@Body() { senha, email }: CreateAutenticacaoDto) {
    return this.autenticacaoService.create(email, senha);
  }
}
