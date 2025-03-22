import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EexamensComponent } from './eexamens.component';

describe('EexamensComponent', () => {
  let component: EexamensComponent;
  let fixture: ComponentFixture<EexamensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EexamensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EexamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
