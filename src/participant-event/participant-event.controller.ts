import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ParticipantEventService } from "./participant-event.service";
import { CreateParticipantEventDTO } from "./dto/create-partcipant-event.dto";

@Controller('/participantEvents')
export class ParticipantEventController {
    constructor(private participantEventService: ParticipantEventService){}

    @Get()
    async readParticipantEvent(){
        const res = this.participantEventService.readParticipantEvent()
        return res
    }

    @Post()
    @HttpCode(201)
    async createParticipantEvent(@Body() createParticipantEventDTO: CreateParticipantEventDTO){
        const res = await this.participantEventService.createParticipantEvent(createParticipantEventDTO)
        
        return {
            status: 201,
            message: 'participante cadastrado em um evento com sucesso'
        }
    }

    @Delete('/:id')
    async deleteParticipantEvent(@Param('id') id: string){
        await this.participantEventService.deleteParticipantEvent(id)
        return{
            status: 200,
            message: 'ParticipanteEvento deletado com sucesso'
        }
    }
}