import { Store } from '@ngrx/store';
import { Component } from "@angular/core";
import { FormControl, FormGroup, PatternValidator, ReactiveFormsModule, Validators } from "@angular/forms";
import { FormBuilder, Validator } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { register } from '../../store/action';
import { RegisterRequestInterface } from 'src/app/types/registerRequiest.interface';
import { AuthStateInterface } from 'src/app/types/authState.interface';
import { CommonModule } from '@angular/common';
import { selectIsSubmitting } from '../../store/reducer';
// import { phoneNumberValidation } from 'src/app/shared/types/nnnnnnnnn/phoneNumberValidation';

@Component({
  selector:"no-register",
  templateUrl: "./register.component.html",
  standalone:true,
  imports:[ReactiveFormsModule ,RouterLink ,CommonModule]
})

export class RegisterComponent{

  form:FormGroup= new FormGroup({

    username:new FormControl('', [Validators.required ]),

    email: new FormControl('', [Validators.required , Validators.email]),

    password: new FormControl('', [Validators.required ]),

    phoneNum: new FormControl('',[ Validators.required , Validators.pattern(/^(01[0125][0-9]{8}|040[0-9]{7})$/)]),
  });



isSupmitting$=this.store.select(selectIsSubmitting)

constructor( private store: Store<{auth:AuthStateInterface}>){}

onSubmit() {
  if(this.form.valid){

console.log('form', this.form.getRawValue())

const request:RegisterRequestInterface={
  user:this.form.getRawValue(),
}

this.store.dispatch(register({request}))


  }


}
}




