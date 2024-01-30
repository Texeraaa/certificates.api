import { IsNotEmpty, IsString, Validate } from "class-validator";
import { ParticipantExistValidator } from "../validators/ParticipantExistValidator.validator";

export class CreateParticipantEventDTO{
    @IsNotEmpty({message: 'O campo idParticipante deve ser preenchido'})
    @IsString({message: 'O campo idParticipante deve ser do tipo string'})
    idParticipante: string

    @IsNotEmpty({message: 'O campo idEvento deve ser preenchido'})
    @IsString({message: 'O campo idEvento deve ser do tipo string'})
    idEvento: string

    @IsNotEmpty({message: 'O campo idTipoPapel deve ser preenchido'})
    @IsString({message: 'O campo idTipoPapel deve ser do tipo string'})
    idTipoPapel: string
}