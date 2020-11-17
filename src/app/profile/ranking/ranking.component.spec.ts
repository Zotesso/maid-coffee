import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingComponent } from './ranking.component';
import { ApiService } from 'src/app/shared/service/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RankingComponent', () => {
  let component: RankingComponent;
  let fixture: ComponentFixture<RankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingComponent ],
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
