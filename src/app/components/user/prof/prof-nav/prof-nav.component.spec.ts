import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfNavComponent } from './prof-nav.component';

describe('ProfNavComponent', () => {
  let component: ProfNavComponent;
  let fixture: ComponentFixture<ProfNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
