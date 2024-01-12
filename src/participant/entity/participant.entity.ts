import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}