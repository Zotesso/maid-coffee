import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* Verify HTML */
  describe('Check content displayed in HTML', () => {
    it('Should Have a Title in Main Navbar', () => {
      const navbar = fixture.debugElement.query(By.css('.navbar')).nativeElement;

      expect(navbar.innerText).toContain('Maid Coffee');
    });

    it('Should Have a school item in Navbar', () => {
      const schoolItem = fixture.debugElement.query(By.css('.school')).nativeElement;

      expect(schoolItem.innerText).toContain('Escola');
    });
  });

  /* Verify CSS */
  describe('Check CSS', () => {
    it('Should Have a class called `navbar-brand`', () => {
      const element = fixture.debugElement.query(By.css('.navbar-brand'));

      expect(element).toBeTruthy();
    });

    it('Should Have a class called `navbar-nav`', () => {
      const element = fixture.debugElement.query(By.css('.navbar-nav'));

      expect(element).toBeTruthy();
    });

    it('Should Have a class called `flex-column`', () => {
      const element = fixture.debugElement.query(By.css('.flex-column'));

      expect(element).toBeTruthy();
    });
  });

  /* Verify Functions */
  describe('Check Functions', () => {
    it('Should call `handleLogout()`', () => {
      fakeAsync(() => {
        spyOn(component, 'handleLogout');
        fixture.detectChanges();
        const click = fixture.debugElement.query(By.css('.logout')).nativeElement;
        click.dispatchEvent(new Event('click'));

        tick();
        expect(component.handleLogout).toHaveBeenCalled();
      });
    });
  });

});
