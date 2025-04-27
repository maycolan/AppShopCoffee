/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CoffeesService } from './coffees.service';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Coffees', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeesService, provideHttpClient()]
    });
  });

  it('should ...', inject([CoffeesService], (service: CoffeesService) => {
    expect(service).toBeTruthy();
  }));
});
