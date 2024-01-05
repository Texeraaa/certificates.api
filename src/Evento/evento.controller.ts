import { Body, Controller, Get, Post } from "@nestjs/common";
import { EventoService } from "./evento.service";
import { EventoEntity } from "./evento.entity";
import { criaEventoDTO } from "./dto/criaEvento.dto";

@Controller('/eventos')
export class EventoController{
    constructor(private EventoService: EventoService){}

    @Get()
    listarEventos(){
        this.EventoService.listaEventos()
    }

    @Post()
    criarEvento(@Body() eventoData: criaEventoDTO){
        const eventoEntity = new EventoEntity()
        eventoEntity.cargaHorariaEvento = eventoData.cargaHorariaEvento
        eventoEntity.dataEvento = eventoData.dataEvento
        eventoEntity.horaEvento = eventoData.horaEvento
        eventoEntity.tituloEvento = eventoData.tituloEvento

        this.EventoService.cadastraEvento(eventoEntity)
    }
}