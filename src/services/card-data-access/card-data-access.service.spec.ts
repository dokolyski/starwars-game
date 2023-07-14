import { TestBed } from '@angular/core/testing';

import { CardDataAccessService } from './card-data-access.service';

describe('CardDataAccessService', () => {
  let service: CardDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
