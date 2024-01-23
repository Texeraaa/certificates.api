import { PartialType } from "@nestjs/swagger";
import { CreateParticipantDTO } from "./create-participant.dto";

export class UpdateParticipantDTO extends PartialType(CreateParticipantDTO){}