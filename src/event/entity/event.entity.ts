import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'eventos'})
export class EventEntity{
    @PrimaryGeneratedColumn('uuid')
    idEvento: string

    @Column({
        name: 'tituloEvento',
        length: 255,
    })
    tituloEvento: string

    @Column({
        name: 'horaEvento',
    })
    horaEvento: string

    @Column({
        name: 'dataEvento',
    })
    dataEvento: string

    @Column({
        name: 'cargaHorariaEvento',
    })
    cargaHorariaEvento: number
}