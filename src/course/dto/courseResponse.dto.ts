import { ApiProperty } from '@nestjs/swagger';

export class CourseResponseDTO {
    @ApiProperty({ example: '7ac6b9c3-6fb1-47ae-ae5e-ccb7aa96a16e', description: 'O identificador único do curso' })
    id: string;

    @ApiProperty({ example: 'Ciências da Computação', description: 'Nome do Curso' })
    nomeCurso: string;
}
