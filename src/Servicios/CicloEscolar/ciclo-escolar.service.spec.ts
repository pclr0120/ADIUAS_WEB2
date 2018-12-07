import { TestBed } from '@angular/core/testing';

import { CicloEscolarService } from './ciclo-escolar.service';

describe('CicloEscolarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CicloEscolarService = TestBed.get(CicloEscolarService);
    expect(service).toBeTruthy();
  });
});
