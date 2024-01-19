import { CourseEntity } from "src/course/entity/course.entity";
import { TypeParticipantEntity } from "src/type-participant/entity/type-participant.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Participante'})
export class ParticipantEntity{
    @PrimaryGeneratedColumn('uuid')
    idParticipante: string

    @Column({
        length: 255,
    })
    nomeParticipante: string

    @Column({
        length: 11,
        unique: true
    })
    cpfParticipante: string

    @Column({
        length:11,
    })
    telefoneParticipante: string

    @Column({
        length: 255,
    })
    emailParticipante: string

    @Column({
        length: 255,
    })
    senhaParticipante: string

    @ManyToOne(() => CourseEntity)
    @JoinColumn({name: 'idCurso'})
    idCurso: CourseEntity

    @ManyToOne(() => TypeParticipantEntity)
    @JoinColumn({name: 'idTipoParticipante'})
    idTipoParticipante: TypeParticipantEntity
}