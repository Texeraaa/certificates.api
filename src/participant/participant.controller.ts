import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDTO } from './dto/create-participant.dto';
import { UpdateParticipantDTO } from './dto/update-participant.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('/participants')
@ApiTags('Participant')
export class ParticipantController {
  constructor(private participantService: ParticipantService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os participantes' })
  @ApiResponse({
    status: 200,
    description: 'Retorna todos os participantes cadastrados.',
    schema: {
      example: [
        {
          idParticipante: '4f9d26d1-d5fc-42b6-ac95-128ad74f73e6',
          nomeParticipante: 'pedro',
          cpfParticipante: '16371688294',
          telefoneParticipante: '19997798101',
          emailParticipante: 'email@example.com',
          senhaParticipante: '123456',
        },
      ],
    },
  })
  async readParticipants() {
    const res = await this.participantService.readParticipant();
    return res;
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Buscar um participante por ID' })
  @ApiResponse({
    status: 200,
    description: 'Retorna os detalhes de um participante específico.',
    schema: {
      example: {
        idParticipante: '4f9d26d1-d5fc-42b6-ac95-128ad74f73e6',
        nomeParticipante: 'pedro',
        cpfParticipante: '16371688294',
        telefoneParticipante: '19997798101',
        emailParticipante: 'email@example.com',
        senhaParticipante: '123456',
      },
    },
  })
  @ApiParam({ name: 'id', type: 'string', description: 'UUID do participante' })
  async readOnlyParticipant(@Param('id') id: string) {
    const res = await this.participantService.readOneParticipant(id);
    return res;
  }

  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo participante' })
  @ApiResponse({
    status: 201,
    description: 'Participante cadastrado com sucesso.',
    schema: {
      example: {
        status: 201,
        message: 'Participante cadastrado com sucesso',
        return: {
          id: '4f9d26d1-d5fc-42b6-ac95-128ad74f73e6',
          name: 'Pedro',
        },
      },
    },
  })
  @ApiBody({
    type: CreateParticipantDTO,
    description: 'Dados para criar um novo participante',
  })
  async createParticipant(@Body() createParticipantDTO: CreateParticipantDTO) {
    const participant =
      await this.participantService.createParticipant(createParticipantDTO);
    return {
      status: 201,
      message: 'Participante cadastrado com sucesso',
      return: {
        id: participant.idParticipante,
        name: participant.nomeParticipante,
      },
    };
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Editar um participante existente' })
  @ApiResponse({
    status: 200,
    description: 'Participante editado com sucesso.',
    schema: {
      example: {
        status: 200,
        message: 'Participante editado com sucesso',
        return: {
          // Adicione aqui o exemplo de dados após a edição, se aplicável
        },
      },
    },
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'UUID do participante a ser editado',
  })
  @ApiBody({
    type: UpdateParticipantDTO,
    description: 'Dados para a edição do participante',
  })
  async updateParticipant(
    @Param('id') id: string,
    @Body() newData: UpdateParticipantDTO,
  ) {
    await this.participantService.updateParticipant(id, newData);
    return {
      status: 200,
      message: 'Participante editado com sucesso',
      return: newData,
    };
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Deletar um participante existente' })
  @ApiResponse({
    status: 200,
    description: 'Participante deletado com sucesso.',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'UUID do participante a ser deletado',
  })
  async deleteParticipant(@Param('id') id: string) {
    await this.participantService.deleteParticipant(id);
    return {
      status: 200,
      message: 'Participante deletado com sucesso',
    };
  }
}
