import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators{
    
    static verifyPassowordsIsNotEquals(control: AbstractControl): ValidationErrors | null{

        let newPassword = control.value.newPassword;
        let checkPassword = control.value.checkPassword;

        if(newPassword && checkPassword){
            if(newPassword !== checkPassword){
                return {verifyPassowordsIsNotEquals: true};
            }
        }

        return null;
    }

    static verifyOldPassword(control: AbstractControl): Promise< ValidationErrors | null>{
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== 'pedro123'){
                    return resolve({verifyOldPassword: true});
                }
                return resolve(null);
            }, 500);
        });

    }
}