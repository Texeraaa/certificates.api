import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { ParticipantEventService } from './participant-event.service';
import { CreateParticipantEventDTO } from './dto/create-partcipant-event.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Participant-Event')
@Controller('/participantEvents')
export class ParticipantEventController {
  constructor(private participantEventService: ParticipantEventService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os participantes de eventos' })
  @ApiResponse({
    status: 200,
    description: 'Retorna todos os participantes cadastrados em eventos.',
    schema: {
      example: {
        id: '29c6cc03-03a7-4ee4-b90a-767b01055ffb',
      },
    },
  })
  async readParticipantEvent() {
    return await this.participantEventService.readParticipantEvent();
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Cadastrar um participante em um evento' })
  @ApiResponse({
    status: 201,
    description: 'Participante cadastrado em um evento com sucesso.',
    schema: {
      example: {
        status: 201,
        message: 'participante cadastrado em um evento com sucesso',
      },
    },
  })
  @ApiBody({
    type: CreateParticipantEventDTO,
    description: 'Dados para cadastrar um participante em um evento',
  })
  async createParticipantEvent(
    @Body() createParticipantEventDTO: CreateParticipantEventDTO,
  ) {
    await this.participantEventService.createParticipantEvent(
      createParticipantEventDTO,
    );
    return {
      status: 201,
      message: 'participante cadastrado em um evento com sucesso',
    };
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Deletar um participante de evento' })
  @ApiResponse({
    status: 200,
    description: 'ParticipanteEvento deletado com sucesso.',
    schema: {
      example: {
        status: 200,
        message: 'ParticipanteEvento deletado com sucesso',
      },
    },
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'UUID do ParticipanteEvento a ser deletado',
  })
  async deleteParticipantEvent(@Param('id') id: string) {
    await this.participantEventService.deleteParticipantEvent(id);
    return {
      status: 200,
      message: 'ParticipanteEvento deletado com sucesso',
    };
  }
}
