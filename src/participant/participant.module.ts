import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ParticipantEntity } from "./entity/participant.entity";
import { ParticipantService } from "./participant.service";
import { ParticipantController } from "./participant.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ParticipantEntity])],
    controllers: [ParticipantController],
    providers: [ParticipantService]
})

export class ParticipantModule{}