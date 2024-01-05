import { IsNotEmpty, IsString, IsDate, IsNumber } from "class-validator";

export class criaEventoDTO{
    @IsNotEmpty({message: 'campo tituloEvento não pode ser vazio'})
    @IsString({message: 'o campo tituloEvento deve ser do tipo string'})
    tituloEvento: string

    @IsNotEmpty({message: 'o campo horaEvento não pode ser vazio'})
    @IsDate({message: 'o campo horaEvento deve ser do tipo data'})
    horaEvento: string

    @IsNotEmpty({message: 'o campo dataEvento não pode ser vazio'})
    @IsDate({message: 'o campo dataEvento deve ser do tipo date'})
    dataEvento: string

    @IsNotEmpty({message: 'o campo cargaHorariaEvento não pode ser vazio'})
    @IsNumber({allowNaN: false, maxDecimalPlaces: 2,allowInfinity: false})
    cargaHorariaEvento: number
}