import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MinLengthValidator(longueur : number) : ValidatorFn | null{
    return (control:AbstractControl) =>{
        let val : string = control.value

        if(val == null){
            return null;
        }
        if(val.length < longueur){
            return {'error' : 'trop court'};
        }
        return null;
    }
}