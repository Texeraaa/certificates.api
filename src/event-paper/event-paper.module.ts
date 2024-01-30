import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventPaperEntity } from "./entity/event-paper.entity";
import { EventPaperService } from "./event-paper.service";
import { EventPaperController } from "./event-paper.controller";

@Module({
    imports: [TypeOrmModule.forFeature([EventPaperEntity])],
    providers: [EventPaperService],
    controllers: [EventPaperController]
})

export class EventPaperModule{}