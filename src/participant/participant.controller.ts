import { Controller, Get } from "@nestjs/common";
import { ParticipantService } from "./participant.service";

@Controller('/participant')
export class ParticipantController {
    constructor(private participantService: ParticipantService){}

    @Get()
    async readParticipants(){
        return this.participantService.readParticipant()
    }
}