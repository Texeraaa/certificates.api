import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateCourseDTO{
    @IsString({message: 'O campo nomeCurso deve ser string'})
    @IsNotEmpty({message: 'O campo nomeCurso deve ser preenchido'})
    nomeCurso: string
}