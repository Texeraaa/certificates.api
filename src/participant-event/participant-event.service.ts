import { InjectRepository } from "@nestjs/typeorm";
import { ParticipantEventEntity } from "./entity/participant-event.entity";
import { Repository } from "typeorm";
import { CreateParticipantEventDTO } from "./dto/create-partcipant-event.dto";

export class ParticipantEventService{
    constructor(
        @InjectRepository(ParticipantEventEntity)
        private readonly participantEventRepository: Repository<ParticipantEventEntity>
    ){}

    async readParticipantEvent(){
        const res = await this.participantEventRepository.find()
        return res
    }

    async createParticipantEvent(participantEventEntity: CreateParticipantEventDTO){
        const partcipantEvent = await this.participantEventRepository.save(participantEventEntity)
        return partcipantEvent
    }

    async deleteParticipantEvent(id: string){
        await this.participantEventRepository.delete(id)
    }
}