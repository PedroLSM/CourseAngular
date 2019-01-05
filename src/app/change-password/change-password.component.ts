import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.verifyOldPassword),
    change: new FormGroup({
      newPassword: new FormControl('', Validators.required),
      checkPassword: new FormControl('', Validators.required)
    }, [ Validators.required, PasswordValidators.verifyPassowordsIsNotEquals])
  });

  // Submit
  changePassword(){
    let isValid = this.form.valid;

    
    if(!isValid){
      this.form.setErrors({ invalidChangePassword: true})
    }else{
      this.form.setErrors({ invalidChangePassword: false})
    }
    
    console.log(this.form);
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get change(){
    return this.form.get('change');
  }

  get newPassword(){
    return this.form.get('change.newPassword');
  }
  
  get checkPassword(){
    return this.form.get('change.checkPassword');
  }

}
