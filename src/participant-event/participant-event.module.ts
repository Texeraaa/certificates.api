import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ParticipantEventEntity } from "./entity/participant-event.entity";
import { ParticipantEventController } from "./participant-event.controller";
import { ParticipantEventService } from "./participant-event.service";

@Module({
    imports: [TypeOrmModule.forFeature([ParticipantEventEntity])],
    controllers: [ParticipantEventController],
    providers: [ParticipantEventService]
})
export class ParticipantEventModule{}