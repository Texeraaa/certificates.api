import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EventService } from "./event.service";
import { EventEntity } from "./entity/event.entity";
import { CreateEventDTO } from "./dto/create-event.dto";
import { v4 as uuid } from "uuid"
import { UpdateEventDTO } from "./dto/update-event.dto";

@Controller('/eventos')
export class EventController{
    constructor(private eventService: EventService){}

    @Get()
    async readEvents(){
        return await this.eventService.readEvents()
    }

    @Post()
    async createEvent(@Body() criaEventoDto: CreateEventDTO){
        const eventEntity = new EventEntity()
        eventEntity.idEvento = uuid()
        eventEntity.tituloEvento = criaEventoDto.tituloEvento
        eventEntity.dataEvento = criaEventoDto.dataEvento
        eventEntity.horaEvento = criaEventoDto.horaEvento
        eventEntity.cargaHorariaEvento = criaEventoDto.cargaHorariaEvento

        await this.eventService.createEvent(eventEntity)

        return{
            status: 200,
            message: 'evento cadastrado com sucesso',
            retorno: eventEntity
        }
    }
    
    @Put('/:id')
    async updateEvent(@Param('id') id: string, @Body() newData: UpdateEventDTO){
        await this.eventService.updateEvent(id,newData)
        return{
            status: 200,
            message: 'Evento atualizado com sucesso',
            retorno: newData,
        }
    }

    @Delete('/:id')
    async deleteEvent(@Param('id') id: string){
        await this.eventService.deleteEvent(id)
        return{
            status: 200,
            message: 'Evento deletado com sucesso'
        }
    }
}