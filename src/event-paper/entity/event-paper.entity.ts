import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'PapelEvento'})
export class EventPaperEntity{
    @PrimaryGeneratedColumn('uuid')
    idTipoPapel: string

    @Column({
        length: 255,
        unique: true
    })
    nomeTipoPapel: string
}