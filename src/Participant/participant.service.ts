import { InjectRepository } from "@nestjs/typeorm";
import { ParticipantEntity } from "./participant.entity";
import { Repository } from "typeorm";
import { CreateParticipantDTO } from "./dto/create-participant.dto";

export class ParticipantService{
    constructor(
        @InjectRepository(ParticipantEntity)
        private readonly participantRepository: Repository<ParticipantEntity>
    ){}

    async readParticipant(){
        await this.participantRepository.find()
    }

    async createParticipant(participantEntity: CreateParticipantDTO){
        await this.participantRepository.save(participantEntity)
    }

    async updateParticipant(id: string,newParticipant: ParticipantEntity){
        await this.participantRepository.update(id,newParticipant)
    }

    async deleteParticipant(id:string){
        await this.participantRepository.delete(id)
    }
}