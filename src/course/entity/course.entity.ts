import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Curso'})
export class CourseEntity{
    @PrimaryGeneratedColumn('uuid')
    idCurso: string

    @Column({
        length: 255,
        unique: true
    })
    nomeCurso: string
}