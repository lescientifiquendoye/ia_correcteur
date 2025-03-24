import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfEtudiantsComponent } from './prof-etudiants.component';

describe('ProfEtudiantsComponent', () => {
  let component: ProfEtudiantsComponent;
  let fixture: ComponentFixture<ProfEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfEtudiantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
