import { InjectRepository } from "@nestjs/typeorm";
import { EventPaperEntity } from "./entity/event-paper.entity";
import { Repository } from "typeorm";
import { CreateEventPaperDTO } from "./dto/create-event-paper.dto";

export class EventPaperService{
    constructor(
        @InjectRepository(EventPaperEntity)
        private readonly eventPaperRepository: Repository<EventPaperEntity>
    ){}

    async readEventPaper(){
        const response = await this.eventPaperRepository.find()
        return response
    }

    async createEventPaper(createEventPaperDTO: CreateEventPaperDTO){
        const response = await this.eventPaperRepository.save(createEventPaperDTO)
        return response
    }

    async deleteEventPaper(idTipoPapel: string){
        await this.eventPaperRepository.delete(idTipoPapel)
    }
}