import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EventService } from "./event.service";
import { EventEntity } from "./entity/event.entity";
import { CreateEventDTO } from "./dto/create-event.dto";
import { v4 as uuid } from "uuid"
import { UpdateEventDTO } from "./dto/update-event.dto";
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { EventResponseDTO } from "./dto/eventResponse.dto";

@ApiTags('Event')
@Controller('/events')
export class EventController{
    constructor(private eventService: EventService){}


    @Get()
    @ApiResponse({status: 200, description: 'Retorna uma lista de cursos cadastrados', type: EventResponseDTO, isArray: true})
    async read(){
        return await this.eventService.readEvents()
    }

    @Post()
    @ApiOperation({summary: 'Criar um novo evento'})
    @ApiResponse({status:201,description: 'evento cadastrado com sucesso'})
    @ApiBody({type: CreateEventDTO,description: 'Dados do evento'})
    async createEvent(@Body() criaEventoDto: CreateEventDTO){
        const eventEntity = new EventEntity()
        eventEntity.idEvento = uuid()
        eventEntity.tituloEvento = criaEventoDto.tituloEvento
        eventEntity.dataEvento = criaEventoDto.dataEvento
        eventEntity.horaEvento = criaEventoDto.horaEvento
        eventEntity.cargaHorariaEvento = criaEventoDto.cargaHorariaEvento
        eventEntity.quantidadeDeAlunos = criaEventoDto.quantidadeDeAlunos
        eventEntity.status = criaEventoDto.status

        await this.eventService.createEvent(eventEntity)

        return{
            status: 200,
            message: 'evento cadastrado com sucesso',
            retorno: eventEntity
        }
    }
    
    @Put('/:id')
    @ApiOperation({ summary: 'Edita um evento existente' })
    @ApiResponse({ status: 200, description: 'Evento atualizado com sucesso' })
    @ApiParam({ name: 'id', type: String, description: 'ID do evento a ser atualizado' })
    @ApiBody({ type: UpdateEventDTO, description: 'Dados para atualização do evento' })
    async updateEvent(@Param('id') id: string, @Body() newData: UpdateEventDTO){
        await this.eventService.updateEvent(id,newData)
        return{
            status: 200,
            message: 'Evento atualizado com sucesso',
            retorno: newData,
        }
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Deleta um evento existente' })
    @ApiResponse({ status: 200, description: 'Evento deletado com sucesso' })
    @ApiParam({ name: 'id', type: String, description: 'ID do evento a ser deletado' })
    async deleteEvent(@Param('id') id: string){
        await this.eventService.deleteEvent(id)
        return{
            status: 200,
            message: 'Evento deletado com sucesso'
        }
    }
}