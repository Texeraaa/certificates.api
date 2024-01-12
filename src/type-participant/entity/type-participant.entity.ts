import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypeParticipantEntity {

    @PrimaryGeneratedColumn('uuid')
    idTipoParticipante: string

    @Column({
        length: 255,
        unique: true
    })
    nomeTipoParticipante: string
}