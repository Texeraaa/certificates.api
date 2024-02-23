import { IsNotEmpty, IsString } from "class-validator";

export class CreateEventPaperDTO{
    @IsString({message: 'O campo nomeTipoPapel deve ser do tipo string'})
    @IsNotEmpty({message: 'O campo nomeTipoPapel deve ser preenchido'})
    nomeTipoPapel: string
}