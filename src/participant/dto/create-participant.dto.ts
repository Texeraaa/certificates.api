import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateParticipantDTO {
  @IsNotEmpty({ message: 'o campo nomeParticipante deve ser preenchido' })
  @IsString({ message: 'O compo nomeParticipante deve ser do tipo string' })
  @ApiProperty({
    example: 'João Silva',
    description: 'Nome completo do participante',
  })
  nomeParticipante: string;

  @IsNotEmpty({ message: 'o campo cpfParticipante deve ser preenchido' })
  @IsString({ message: 'o campo cpfParticipante deve ser do tipo string' })
  @Matches(/^\d{11}$/, {
    message: 'CPF deve conter apenas números e ter 11 dígitos.',
  })
  @ApiProperty({
    example: '12345678901',
    description:
      'CPF do participante. Deve conter apenas números e ter 11 dígitos.',
  })
  cpfParticipante: string;

  @IsNotEmpty({ message: 'o campo telefoneParticipante deve ser preenchido' })
  @IsString({ message: 'O campo telefoneParticipante deve ser do tipo string' })
  @Length(11, 11, {
    message: 'o campo telefoneParticipante deve conter apenas 11 dígitos',
  })
  @ApiProperty({
    example: '11987654321',
    description:
      'Telefone do participante. Deve conter apenas números e ter 11 dígitos.',
  })
  telefoneParticipante: string;

  @IsNotEmpty({ message: 'o campo emailParticipante deve ser preenchido' })
  @IsString({ message: 'o campo emailParticipante deve ser do tipo string' })
  @ApiProperty({
    example: 'joao.silva@example.com',
    description: 'Email do participante.',
  })
  emailParticipante: string;

  @IsNotEmpty({ message: 'o campo senhaParticipante deve ser preenchido' })
  @IsString({ message: 'o campo senhaParticipante deve ser do tipo string' })
  @ApiProperty({
    example: 'senhaSegura123',
    description: 'Senha do participante. Deve ser uma string.',
  })
  senhaParticipante: string;
}
