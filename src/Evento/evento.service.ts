import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EventoEntity } from "./evento.entity";
import { Repository } from "typeorm";

@Injectable()
export class EventoService {
    constructor(
        @InjectRepository(EventoEntity)
        private readonly eventoRepository: Repository<EventoEntity>
    ) {}

    async listaEventos(){
        const eventos = await this.eventoRepository.find()
        return eventos
    }

    async cadastraEvento(EventoEntity: EventoEntity){
        await this.eventoRepository.save(EventoEntity)
    }

    async editaEvento(id: string, EventoEntity: EventoEntity){
        this.eventoRepository.update(id, EventoEntity)
    }
    
    async apagaEvento(id: string){
        this.eventoRepository.delete(id)
    }
}