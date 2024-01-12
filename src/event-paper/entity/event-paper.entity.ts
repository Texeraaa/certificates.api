import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventPaperEntity{
    @PrimaryGeneratedColumn('uuid')
    idTipoPapel: string

    @Column({
        length: 255,
        unique: true
    })
    nomeTipoPapel: string
}