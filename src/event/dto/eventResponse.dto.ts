import { ApiProperty } from '@nestjs/swagger';

export class EventResponseDTO {
  @ApiProperty({ example: '4d929e5d-6cf6-46f8-8189-e9d931cee6b5', description: 'Identificador único do evento' })
  idEvento: string;

  @ApiProperty({ example: 'Curso de HTML', description: 'Título do evento' })
  tituloEvento: string;

  @ApiProperty({ example: '08:00:00', description: 'Hora do início do evento' })
  horaEvento: string;

  @ApiProperty({ example: '2024-03-24', description: 'Data de realização do evento' })
  dataEvento: string;

  @ApiProperty({ example: 11, description: 'Carga horária total do evento em horas' })
  cargaHorariaEvento: number;

  @ApiProperty({ example: 'CONCLUIDO', description: 'Status atual do evento' })
  status: string;

  @ApiProperty({ example: 22, description: 'Quantidade de alunos participantes do evento' })
  quantidadeDeAlunos: number;
}
