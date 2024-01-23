import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { ParticipantService } from "./participant.service";
import { CreateParticipantDTO } from "./dto/create-participant.dto";
import { ParticipantEntity } from "./entity/participant.entity";
import { UpdateParticipantDTO } from "./dto/update-participant.dto";

@Controller('/participants')
export class ParticipantController {
    constructor(private participantService: ParticipantService){}

    @Get()
    async readParticipants(){
        const res = await this.participantService.readParticipant()
        return res
    }
    
    @Post()
    async createParticipant(@Body() createParticipantDTO: CreateParticipantDTO){
        const participant = await this.participantService.createParticipant(createParticipantDTO)
        return {
            status: 201,
            message: 'Participante cadastrado com sucesso',
            return:{
                id: participant.idParticipante,
                name: participant.nomeParticipante
            } 
        }
    }

    @Put('/:id')
    async updateParticipant(@Param('id') id: string,@Body() newData: UpdateParticipantDTO){
        await this.participantService.updateParticipant(id,newData)
        return {
            status: 200,
            message: 'Participante editado com sucesso',
            return: newData
        }
    }

    @Delete('/:id')
    async deleteParticipant(@Param('id') id: string){
        await this.participantService.deleteParticipant(id)
        return{
            status: 200,
            message: 'Participante deletado com sucesso',
        }
    }
}