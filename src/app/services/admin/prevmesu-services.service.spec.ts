import { TestBed } from '@angular/core/testing';

import { PrevmesuServicesService } from './prevmesu-services.service';

describe('PrevmesuServicesService', () => {
  let service: PrevmesuServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevmesuServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
