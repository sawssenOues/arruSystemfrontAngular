import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeomanagementComponent } from './geomanagement.component';

describe('GeomanagementComponent', () => {
  let component: GeomanagementComponent;
  let fixture: ComponentFixture<GeomanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeomanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeomanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
