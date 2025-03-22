import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDashboardComponent } from './pro-dashboard.component';

describe('ProDashboardComponent', () => {
  let component: ProDashboardComponent;
  let fixture: ComponentFixture<ProDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
