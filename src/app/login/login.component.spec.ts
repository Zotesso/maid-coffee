import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../shared/service/api.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [FormBuilder, ApiService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
