import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtuNavComponent } from './etu-nav.component';

describe('EtuNavComponent', () => {
  let component: EtuNavComponent;
  let fixture: ComponentFixture<EtuNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtuNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
