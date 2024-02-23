import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateEventDTO{
    @IsNotEmpty({message: 'o campo tituloEvento deve ser preenchido'})
    @IsString({message: 'o campo tituloEvento deve ser do tipo string'})
    tituloEvento: string

    @IsNotEmpty({message: 'o campo horaEvento deve ser preenchido'})
    @IsString({message: 'o campo horaEvento deve ser do tipo string'})
    horaEvento: string

    @IsNotEmpty({message: 'o campo dataEvento deve ser preenchido'})
    @IsString({message: 'o campo dataEvento deve ser do tipo string'})
    dataEvento: string

    @IsNotEmpty({message: 'o campo cargaHorariaEvento deve ser preenchido'})
    @IsNumber({allowNaN: false, maxDecimalPlaces: 2,allowInfinity: false})
    cargaHorariaEvento: number
}