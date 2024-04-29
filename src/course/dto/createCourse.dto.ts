import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateCourseDTO{
    @IsString({message: 'O campo nomeCurso deve ser string'})
    @IsNotEmpty({message: 'O campo nomeCurso deve ser preenchido'})
    @ApiProperty({example: 'Ciências da Computação', description: 'Nome do curso'})
    nomeCurso: string
}