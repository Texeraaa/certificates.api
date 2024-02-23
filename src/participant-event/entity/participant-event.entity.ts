import { EventEntity } from "src/event/entity/event.entity";
import { ParticipantEntity } from "src/participant/entity/participant.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'ParticipanteEvento'})
export class ParticipantEventEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => ParticipantEntity)
    @JoinColumn({name: 'idParticipante'})
    idParticipante: string

    @ManyToOne(() => EventEntity)
    @JoinColumn({name: 'idEvento'})
    idEvento: string

    @ManyToOne(() => ParticipantEventEntity)
    @JoinColumn({name: 'idTipoPapel'})
    idTipoPapel: string
}