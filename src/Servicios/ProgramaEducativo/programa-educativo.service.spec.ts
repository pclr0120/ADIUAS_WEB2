import { TestBed } from '@angular/core/testing';

import { ProgramaEducativoService } from './programa-educativo.service';

describe('ProgramaEducativoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramaEducativoService = TestBed.get(ProgramaEducativoService);
    expect(service).toBeTruthy();
  });
});
