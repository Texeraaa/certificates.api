import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipantEventDTO {
  @IsNotEmpty({ message: 'O campo idParticipante deve ser preenchido' })
  @IsString({ message: 'O campo idParticipante deve ser do tipo string' })
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'UUID do participante.',
    type: String,
  })
  idParticipante: string;

  @IsNotEmpty({ message: 'O campo idEvento deve ser preenchido' })
  @IsString({ message: 'O campo idEvento deve ser do tipo string' })
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174001',
    description: 'UUID do evento.',
    type: String,
  })
  idEvento: string;

  @IsNotEmpty({ message: 'O campo idTipoPapel deve ser preenchido' })
  @IsString({ message: 'O campo idTipoPapel deve ser do tipo string' })
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174002',
    description: 'UUID do tipo de papel do participante no evento.',
    type: String,
  })
  idTipoPapel: string;
}
