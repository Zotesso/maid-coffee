import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { validatePasswordValidation } from '../shared/validate-password.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = this.formBuilder.group({
    username: ['', [Validators.required,
                   Validators.minLength(5),
                   Validators.maxLength(15)]
              ],

    email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],

    password: ['', [Validators.required,
                   Validators.minLength(5)]
              ],
    repeatPassword: ['', Validators.required],
  }, {validators: validatePasswordValidation});

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    this.submitted = true;
    console.warn(this.userForm.value);
  }

  get username(): AbstractControl { return this.userForm.get('username'); }

  get email(): AbstractControl { return this.userForm.get('email'); }

  get password(): AbstractControl { return this.userForm.get('password'); }

  get repeatPassword(): AbstractControl { return this.userForm.get('repeatPassword'); }
}
