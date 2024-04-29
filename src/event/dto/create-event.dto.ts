import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateEventDTO{
    @IsNotEmpty({message: 'o campo tituloEvento deve ser preenchido'})
    @IsString({message: 'o campo tituloEvento deve ser do tipo string'})
    @ApiProperty({example: 'Curso de HTML', description: 'Nome do evento'})
    tituloEvento: string

    @IsNotEmpty({message: 'o campo horaEvento deve ser preenchido'})
    @IsString({message: 'o campo horaEvento deve ser do tipo string'})
    @ApiProperty({example: '08:00:00', description: 'Horario do evento'})
    horaEvento: string

    @IsNotEmpty({message: 'o campo dataEvento deve ser preenchido'})
    @IsString({message: 'o campo dataEvento deve ser do tipo string'})
    @ApiProperty({example: '2024-03-24', description: 'Data do evento'})
    dataEvento: string

    @IsNotEmpty({message: 'o campo cargaHorariaEvento deve ser preenchido'})
    @IsNumber({allowNaN: false, maxDecimalPlaces: 2,allowInfinity: false})
    @ApiProperty({example: '08', description: 'carga horaria do evento'})
    cargaHorariaEvento: number

    @IsNotEmpty({message: 'O campo quantidadeDeAlunos deve ser preenchido'})
    @IsNumber({allowNaN: false, maxDecimalPlaces: 2,allowInfinity: false})
    @ApiProperty({example: '20', description: 'Quantidade de participantes do evento'})
    quantidadeDeAlunos: number

    @IsNotEmpty({message: 'o campo status deve ser preenchido'})
    @IsString({message: 'o campo status deve ser do tipo string'})
    @ApiProperty({example: 'CONCLUIDO', description: 'status do evento'})
    status: string
}