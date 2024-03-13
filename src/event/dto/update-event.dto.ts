import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateEventDTO{
    @IsNotEmpty({message: 'campo tituloEvento não pode ser vazio'})
    @IsString({message: 'o campo tituloEvento deve ser do tipo string'})
    @IsOptional()
    tituloEvento: string

    @IsNotEmpty({message: 'o campo horaEvento não pode ser vazio'})
    @IsString({message: 'o campo horaEvento deve ser do tipo string'})
    @IsOptional()
    horaEvento: string

    @IsNotEmpty({message: 'o campo dataEvento não pode ser vazio'})
    @IsString({message: 'o campo dataEvento deve ser do tipo string'})
    @IsOptional()
    dataEvento: string

    @IsNotEmpty({message: 'o campo cargaHorariaEvento não pode ser vazio'})
    @IsNumber({allowNaN: false, maxDecimalPlaces: 2,allowInfinity: false})
    @IsOptional()
    cargaHorariaEvento: number

    @IsNotEmpty({message: 'o campo status não pode ser vazio'})
    @IsString({message: 'o campo status deve ser do tipo string'})
    @IsOptional()
    status: string
}