import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Evento'})
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
        type: 'time'
    })
    horaEvento: string

    @Column({
        name: 'dataEvento',
        type: 'date'
    })
    dataEvento: string

    @Column({
        name: 'cargaHorariaEvento',
    })
    cargaHorariaEvento: number
}