/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeIsmahService } from './recipeIsmah.service';

describe('Service: RecipeIsmah', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeIsmahService]
    });
  });

  it('should ...', inject([RecipeIsmahService], (service: RecipeIsmahService) => {
    expect(service).toBeTruthy();
  }));
});
