import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ApiService } from '../shared/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
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
    this.service.createUser(this.loginForm.value).subscribe(
      success => this.router.navigate(['/profile']),
      error => console.error(this.loginForm.value)
    );
  }

  get username(): AbstractControl { return this.loginForm.get('username'); }

  get email(): AbstractControl { return this.loginForm.get('email'); }

  get password(): AbstractControl { return this.loginForm.get('password'); }

  get repeatPassword(): AbstractControl { return this.loginForm.get('repeatPassword'); }

  get charName(): AbstractControl { return this.loginForm.get('charName'); }
}
