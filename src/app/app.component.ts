import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ANGULARFORMUPDATE';

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    age : new FormControl('', [Validators.required, Validators.min(18), Validators.max(60)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    id: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    password: new FormControl('', [Validators.required])
  })

  constructor() { }

  registrForm() {
    console.log(this.signupForm.value)
  }

  get f(){
    console.log(this.signupForm.controls)
    return this.signupForm.controls;
  }

}
