/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingListIsmahService } from './shopping-listIsmah.service';

describe('Service: ShoppingListIsmah', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListIsmahService]
    });
  });

  it('should ...', inject([ShoppingListIsmahService], (service: ShoppingListIsmahService) => {
    expect(service).toBeTruthy();
  }));
});
