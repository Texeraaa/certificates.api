import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { EventPaperService } from "./event-paper.service";
import { CreateEventPaperDTO } from "./dto/create-event-paper.dto";

@Controller('/eventPaper')
export class EventPaperController {
    constructor(private eventPaperService: EventPaperService){}

    @Get()
    async readEventPaper(){
        return await this.eventPaperService.readEventPaper()
    }

    @Post()
    async createEventPaper(@Body() createEventPaperDTO: CreateEventPaperDTO){
        const event = await this.eventPaperService.createEventPaper(createEventPaperDTO)
        return{
            status: 201,
            message: 'Papel de evento criado com sucesso',
            return: {
                id: event.idTipoPapel,
                nomeTipoPapel: event.nomeTipoPapel
            }
        }
    }

    @Delete('/:id')
    async deleteEventPaper(@Param('id') id: string){
        await this.eventPaperService.deleteEventPaper(id)
        return{
            status: 200,
            message: 'Papel de evento deletado com sucesso'
        }
    }
}