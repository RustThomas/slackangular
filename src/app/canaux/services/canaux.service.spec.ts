import { TestBed } from '@angular/core/testing';
import { CanauxService } from './canaux.service';

describe('CanauxService', () => {
  let service: CanauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
