import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { validatePasswordValidation } from '../shared/validate-password.directive';
import { ApiService } from '../shared/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

    charName: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)]
    ],
  });

  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.service.createUser(this.userForm.value).subscribe(
      success => this.router.navigate(['/login']),
      error => console.error(this.userForm.value)
    );
  }

  get username(): AbstractControl { return this.userForm.get('username'); }

  get email(): AbstractControl { return this.userForm.get('email'); }

  get password(): AbstractControl { return this.userForm.get('password'); }

  get repeatPassword(): AbstractControl { return this.userForm.get('repeatPassword'); }

  get charName(): AbstractControl { return this.userForm.get('charName'); }
}
