import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamensCreerComponent } from './examens-creer.component';

describe('ExamensCreerComponent', () => {
  let component: ExamensCreerComponent;
  let fixture: ComponentFixture<ExamensCreerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamensCreerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamensCreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
