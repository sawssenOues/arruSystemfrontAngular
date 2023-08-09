import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesureIdComponent } from './mesure-id.component';

describe('MesureIdComponent', () => {
  let component: MesureIdComponent;
  let fixture: ComponentFixture<MesureIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesureIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesureIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
