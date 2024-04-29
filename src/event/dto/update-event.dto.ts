import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEventDTO {
    @IsOptional()
    @IsNotEmpty({ message: 'campo tituloEvento não pode ser vazio' })
    @IsString({ message: 'o campo tituloEvento deve ser do tipo string' })
    @ApiProperty({ example: 'Curso de HTML Avançado', description: 'Nome do evento', required: false })
    tituloEvento: string;

    @IsOptional()
    @IsNotEmpty({ message: 'o campo horaEvento não pode ser vazio' })
    @IsString({ message: 'o campo horaEvento deve ser do tipo string' })
    @ApiProperty({ example: '14:00:00', description: 'Horário do evento', required: false })
    horaEvento: string;

    @IsOptional()
    @IsNotEmpty({ message: 'o campo dataEvento não pode ser vazio' })
    @IsString({ message: 'o campo dataEvento deve ser do tipo string' })
    @ApiProperty({ example: '2024-04-15', description: 'Data do evento', required: false })
    dataEvento: string;

    @IsOptional()
    @IsNotEmpty({ message: 'o campo cargaHorariaEvento não pode ser vazio' })
    @IsNumber({ allowNaN: false, maxDecimalPlaces: 2, allowInfinity: false })
    @ApiProperty({ example: 10, description: 'Carga horária do evento em horas', required: false })
    cargaHorariaEvento: number;

    @IsOptional()
    @IsNotEmpty({ message: 'O campo quantidadeDeAlunos deve ser preenchido' })
    @IsNumber({ allowNaN: false, maxDecimalPlaces: 2, allowInfinity: false })
    @ApiProperty({ example: 30, description: 'Quantidade de participantes do evento', required: false })
    quantidadeDeAlunos: number;

    @IsOptional()
    @IsNotEmpty({ message: 'o campo status não pode ser vazio' })
    @IsString({ message: 'o campo status deve ser do tipo string' })
    @ApiProperty({ example: 'CONCLUIDO',  description: 'Status do evento', required: false })
    status: string;
}
