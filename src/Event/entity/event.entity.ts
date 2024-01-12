import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'eventos'})
export class EventEntity{
    @PrimaryGeneratedColumn('uuid')
    idEvento: string

    @Column({
        name: 'tituloEvento',
        length: 255,
        nullable: false
    })
    tituloEvento: string

    @Column({
        name: 'horaEvento',
        nullable: false
    })
    horaEvento: string

    @Column({
        name: 'dataEvento',
        nullable: false
    })
    dataEvento: string

    @Column({
        name: 'cargaHorariaEvento',
        nullable: false
    })
    cargaHorariaEvento: number
}