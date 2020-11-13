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

    hashedPassword: ['', [Validators.required,
                   Validators.minLength(5)]
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
    this.service.authUser(this.loginForm.value).subscribe(
      success => {
        localStorage.setItem('accessToken', success.accessToken);
        localStorage.setItem('charName', success.name);

        this.router.navigate(['/profile']);
      },
      error => console.error(this.loginForm.value)
    );
  }

  get username(): AbstractControl { return this.loginForm.get('username'); }

  get hashedPassword(): AbstractControl { return this.loginForm.get('hashedPassword'); }
}
