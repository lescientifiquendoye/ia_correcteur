import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevoirCorrComponent } from './revoir-corr.component';

describe('RevoirCorrComponent', () => {
  let component: RevoirCorrComponent;
  let fixture: ComponentFixture<RevoirCorrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevoirCorrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevoirCorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
