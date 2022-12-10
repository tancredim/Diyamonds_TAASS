import { TestBed } from '@angular/core/testing';

import { ListaAnnunciService } from './listaAnnunci.service';

describe('UserService', () => {
  let service: ListaAnnunciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaAnnunciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
