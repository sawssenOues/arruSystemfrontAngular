import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineIdRisquesComponent } from './domaine-id-risques.component';

describe('DomaineIdRisquesComponent', () => {
  let component: DomaineIdRisquesComponent;
  let fixture: ComponentFixture<DomaineIdRisquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomaineIdRisquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomaineIdRisquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
