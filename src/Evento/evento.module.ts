import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventoEntity } from "./evento.entity";
import { EventoController } from "./evento.controller";
import { EventoService } from "./evento.service";
import { EventoRepository } from "./evento.repository";

@Module({
    imports: [TypeOrmModule.forFeature([EventoEntity])],
    controllers: [EventoController],
    providers: [EventoService, EventoRepository]
})

export class EventoModule{}