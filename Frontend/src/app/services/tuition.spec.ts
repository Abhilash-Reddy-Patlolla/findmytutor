import { TestBed } from '@angular/core/testing';

import { Tuition } from './tuition';

describe('Tuition', () => {
  let service: Tuition;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tuition);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
