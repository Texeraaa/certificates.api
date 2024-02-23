import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { ParticipantService } from "src/participant/participant.service";

@ValidatorConstraint({ async: true })
@Injectable()
export class ParticipantExistValidatorConstraint implements ValidatorConstraintInterface {
  constructor(private participantService: ParticipantService) {}

  async validate(value: any) {
    console.log('::> participantService:',this.participantService)
    const participant = await this.participantService.readOneParticipant(value);

    return !!participant;
  }

  defaultMessage(args: ValidationArguments) {
    return 'O idParticipante não existe';
  }
}

export function ParticipantExistValidator(validationOptions?: {message: string}){
  return function (object: any, propertyName: string){
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ParticipantExistValidatorConstraint,
    });
  }
}