import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisqueIdMesuresComponent } from './risque-id-mesures.component';

describe('RisqueIdMesuresComponent', () => {
  let component: RisqueIdMesuresComponent;
  let fixture: ComponentFixture<RisqueIdMesuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisqueIdMesuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisqueIdMesuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
