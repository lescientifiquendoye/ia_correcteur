import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotExamsComponent } from './depot-exams.component';

describe('DepotExamsComponent', () => {
  let component: DepotExamsComponent;
  let fixture: ComponentFixture<DepotExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepotExamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepotExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
