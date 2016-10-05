/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpeakersService } from './speakers.service';

describe('Service: Speakers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeakersService]
    });
  });

  it('should ...', inject([SpeakersService], (service: SpeakersService) => {
    expect(service).toBeTruthy();
  }));
});
