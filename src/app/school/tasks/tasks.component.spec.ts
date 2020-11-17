import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { SchoolTask } from 'src/app/shared/model/school-tasks.model';
import { By } from '@angular/platform-browser';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from 'src/app/shared/service/api.service';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksComponent],
      imports: [HttpClientTestingModule, ModalModule.forRoot()],
      providers: [ApiService, BsModalService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;

    const schoolTasks: SchoolTask[] = [
      {
        id: 1,
        title: 'Title',
        description: 'Description',
        type: 'school',
        energy: 10,
        knowledge: 100,
        popularity: 20
      }
    ];

    component.schoolTasks = schoolTasks;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* Verify HTML */
  describe('Check content displayed in HTML', () => {
    it('Should Have Title', () => {
      const title = fixture.debugElement.query(By.css('.card-title')).nativeElement;

      expect(title.innerText).toContain('Title');
    });

    it('Should Have Title', () => {
      const description = fixture.debugElement.query(By.css('.card-text')).nativeElement;

      expect(description.innerText).toContain('Description');
    });
  });

  /* Verify CSS */
  describe('Check CSS', () => {
    it('Should Have a class called `card-body`', () => {
      const element = fixture.debugElement.query(By.css('.card-body'));

      expect(element).toBeTruthy();
    });

    it('Should Have a class called `card-title`', () => {
      const element = fixture.debugElement.query(By.css('.card-title'));

      expect(element).toBeTruthy();
    });

    it('Should Have a class called `card-text`', () => {
      const element = fixture.debugElement.query(By.css('.card-text'));

      expect(element).toBeTruthy();
    });
  });

  /* Verify Functions */
  describe('Check Functions', () => {
    it('Should call `handleDoTask()`', () => {
      fakeAsync(() => {
        spyOn(component, 'handleDoTask');
        fixture.detectChanges();
        const click = fixture.debugElement.query(By.css('.btn')).nativeElement;
        click.dispatchEvent(new Event('click'));

        tick();
        expect(component.handleDoTask).toHaveBeenCalled();
      });
    });
  });

});
