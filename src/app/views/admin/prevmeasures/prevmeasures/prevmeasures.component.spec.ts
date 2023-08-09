import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevmeasuresComponent } from './prevmeasures.component';

describe('PrevmeasuresComponent', () => {
  let component: PrevmeasuresComponent;
  let fixture: ComponentFixture<PrevmeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevmeasuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevmeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
