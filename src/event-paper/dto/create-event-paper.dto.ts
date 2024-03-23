import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEventPaperDTO {
    @IsString({ message: 'O campo nomeTipoPapel deve ser do tipo string' })
    @IsNotEmpty({ message: 'O campo nomeTipoPapel deve ser preenchido' })
    @ApiProperty({
        example: 'Palestrante',
        description: 'Nome do tipo de papel relacionado ao evento, por exemplo, Palestrante e alunos.',
        type: String
    })
    nomeTipoPapel: string;
}
