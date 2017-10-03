/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BioComponent } from './bio.component';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService } from '../shared/speakers.service';

describe('Component: Bio', () => {
  it('should create an instance', () => {
    let component = new BioComponent({} as ActivatedRoute, {} as SpeakersService);
    expect(component).toBeTruthy();
  });
});
