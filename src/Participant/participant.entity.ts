import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Participante'})
export class ParticipantEntity{
    @PrimaryGeneratedColumn('uuid')
    idParticipante: string

    @Column({
        length: 255,
        nullable: false
    })
    nomeParticipante: string

    @Column({
        length: 11,
        nullable: false,
        unique: true
    })
    cpfParticipante: string

    @Column({
        length:11,
        nullable: false
    })
    telefoneParticipante: string

    @Column({
        length: 255,
        nullable: false
    })
    emailParticipante: string

    @Column({
        length: 255,
        nullable: false
    })
    senhaParticipante: string
}