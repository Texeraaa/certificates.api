import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";

@ValidatorConstraint({name: 'IsValidPhoneNumber', async: true})
export class IsValidPhoneNumberConstraint implements ValidatorConstraintInterface {
    validate(phone: any, args: ValidationArguments){
        return typeof phone === 'string' && /^\(\d{2}\) \d \d{4}-\d{4}$/.test(phone)
    }
}

export function IsValidPhoneNumber(validationOptions?: ValidationOptions){
    return function(object: any,propertyName: string){
        registerDecorator({
            name: 'IsValidPhoneNumber',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: IsValidPhoneNumberConstraint
        })
    }
}