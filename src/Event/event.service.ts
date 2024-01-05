import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EventEntity } from "./event.entity";
import { Repository } from "typeorm";
import { UpdateEventDTO } from "./dto/update-event.dto";

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(EventEntity)
        private readonly eventRepository: Repository<EventEntity>
    ) {}

    async readEvents(){
        return await this.eventRepository.find()
    }

    async createEvent(eventEntity: EventEntity){
        await this.eventRepository.save(eventEntity)
    }

    async updateEvent(id: string, eventEntity: UpdateEventDTO){
        await this.eventRepository.update(id, eventEntity)
    }
    
    async deleteEvent(id: string){
        await this.eventRepository.delete(id)
    }
}