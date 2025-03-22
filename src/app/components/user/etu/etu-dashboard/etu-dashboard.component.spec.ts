import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtuDashboardComponent } from './etu-dashboard.component';

describe('EtuDashboardComponent', () => {
  let component: EtuDashboardComponent;
  let fixture: ComponentFixture<EtuDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtuDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtuDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
