import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { EventPaperService } from "./event-paper.service";
import { CreateEventPaperDTO } from "./dto/create-event-paper.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('Event-Paper')
@Controller('/eventPaper')
export class EventPaperController {
    constructor(private eventPaperService: EventPaperService){}

    @Get()
    @ApiOperation({ summary: 'Listar todos os papéis de evento' }) 
    @ApiResponse({
        status: 200,
        description: 'Retorna todos os papéis de evento existentes.',
        schema: {
            example: [
                {
                    id: '0125162-4773-4c1e-8f24-05631c1805aa',
                    nomeTipoPapel: 'Palestrante'
                },
                {
                    id: '231241-4773-4c1e-8f24-05631cada2r',
                    nomeTipoPapel: 'Aluno'
                }
            ]
        }
    })
    async readEventPaper(){
        return await this.eventPaperService.readEventPaper()
    }

    @Post()
    @ApiOperation({ summary: 'Criar um novo papel de evento' })
    @ApiBody({ type: CreateEventPaperDTO, description: 'Dados para criar um novo papel de evento' })
    @ApiResponse({
        status: 201,
        description: 'Papel de evento criado com sucesso.',
        schema: {
            example: {
                status: 201,
                message: 'Papel de evento criado com sucesso',
                return: {
                    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                    nomeTipoPapel: 'Participante'
                }
            }
        }
    })
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
    @ApiOperation({ summary: 'Deletar um papel de evento existente' })
    @ApiParam({ name: 'id', type: String, description: 'ID do papel de evento a ser deletado' })
    @ApiResponse({
        status: 200,
        description: 'Papel de evento deletado com sucesso.',
        schema: {
            example: {
                status: 200,
                message: 'Papel de evento deletado com sucesso'
            }
        }
    })
    async deleteEventPaper(@Param('id') id: string){
        await this.eventPaperService.deleteEventPaper(id)
        return{
            status: 200,
            message: 'Papel de evento deletado com sucesso'
        }
    }
}
