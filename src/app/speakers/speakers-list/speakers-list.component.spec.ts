/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SpeakersListComponent } from './speakers-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakersService } from '../shared/speakers.service';

describe('Component: SpeakersList', () => {
  it('should create an instance', () => {
    let component = new SpeakersListComponent({} as Router, {} as ActivatedRoute, {} as SpeakersService);
    expect(component).toBeTruthy();
  });
});
