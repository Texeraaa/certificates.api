import { InjectRepository } from "@nestjs/typeorm";
import { ParticipantEntity } from "./entity/participant.entity";
import { Repository } from "typeorm";
import { CreateParticipantDTO } from "./dto/create-participant.dto";
import { UpdateParticipantDTO } from "./dto/update-participant.dto";

export class ParticipantService{
    constructor(
        @InjectRepository(ParticipantEntity)
        private readonly participantRepository: Repository<ParticipantEntity>
    ){}

    async readParticipant(){
        return await this.participantRepository.find()
    }

    async readOneParticipant(id: string){
        return await this.participantRepository.findOne({where:{idParticipante: id}})
    }

    async createParticipant(participantEntity: CreateParticipantDTO){
        const participant = await this.participantRepository.save(participantEntity)
        return participant
    }

    async updateParticipant(id: string, newParticipant: UpdateParticipantDTO){
        await this.participantRepository.update(id,newParticipant)
    }

    async deleteParticipant(id:string){
        await this.participantRepository.delete(id)
    }
}