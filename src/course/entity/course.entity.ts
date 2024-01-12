import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CourseEntity{
    @PrimaryGeneratedColumn('uuid')
    idCurso: string

    @Column({
        length: 255,
        unique: true
    })
    nomeCurso: string
}