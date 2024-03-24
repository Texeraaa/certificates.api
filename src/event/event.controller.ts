import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventService } from './event.service';
import { EventEntity } from './entity/event.entity';
import { CreateEventDTO } from './dto/create-event.dto';
import { v4 as uuid } from 'uuid';
import { UpdateEventDTO } from './dto/update-event.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { EventResponseDTO } from './dto/eventResponse.dto';

@ApiTags('Event')
@Controller('/events')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os eventos' })
  @ApiResponse({
    status: 200,
    description: 'Retorna uma lista de cursos cadastrados',
    type: EventResponseDTO,
    isArray: true,
  })
  async read() {
    return await this.eventService.readEvents();
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo evento' })
  @ApiBody({ type: CreateEventDTO, description: 'Dados do evento' })
  @ApiResponse({
    status: 200,
    description: 'Retorna dados do evento criado',
    schema: {
      example: {
        status: 200,
        message: 'evento cadastrado com sucesso',
        retorno: {
          idEvento: '04d6c9d1-045b-452e-aa73-83b8b975b0c6',
          tituloEvento: 'Curso de HTML',
          dataEvento: '2024-03-24',
          horaEvento: '08:00:00',
          cargaHorariaEvento: 10,
          quantidadeDeAlunos: 20,
          status: 'PENDENTE',
        },
      },
    },
  })
  async createEvent(@Body() criaEventoDto: CreateEventDTO) {
    const eventEntity = new EventEntity();
    eventEntity.idEvento = uuid();
    eventEntity.tituloEvento = criaEventoDto.tituloEvento;
    eventEntity.dataEvento = criaEventoDto.dataEvento;
    eventEntity.horaEvento = criaEventoDto.horaEvento;
    eventEntity.cargaHorariaEvento = criaEventoDto.cargaHorariaEvento;
    eventEntity.quantidadeDeAlunos = criaEventoDto.quantidadeDeAlunos;
    eventEntity.status = criaEventoDto.status;

    await this.eventService.createEvent(eventEntity);

    return {
      status: 200,
      message: 'evento cadastrado com sucesso',
      retorno: eventEntity,
    };
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Edita um evento existente' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID do evento a ser atualizado',
  })
  @ApiBody({
    type: UpdateEventDTO,
    description: 'Dados para atualização do evento',
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna dados do evento modificado',
    schema: {
      example: {
        status: 200,
        message: 'Evento atualizado com sucesso',
        retorno: {
          cargaHorariaEvento: 11,
          status: 'CONCLUIDO',
          quantidadeDeAlunos: 22,
        },
      },
    },
  })
  async updateEvent(@Param('id') id: string, @Body() newData: UpdateEventDTO) {
    await this.eventService.updateEvent(id, newData);
    return {
      status: 200,
      message: 'Evento atualizado com sucesso',
      retorno: newData,
    };
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Deleta um evento existente' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID do evento a ser deletado',
  })
  @ApiResponse({
    status: 200,
    description: 'Evento deletado com sucesso',
    schema: {
      example: {
        status: 200,
        message: 'Evento deletado com sucesso',
      },
    },
  })
  async deleteEvent(@Param('id') id: string) {
    await this.eventService.deleteEvent(id);
    return {
      status: 200,
      message: 'Evento deletado com sucesso',
    };
  }
}
