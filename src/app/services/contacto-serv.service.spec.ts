import { TestBed } from '@angular/core/testing';

import { ContactoServService } from './contacto-serv.service';

describe('ContactoServService', () => {
  let service: ContactoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
