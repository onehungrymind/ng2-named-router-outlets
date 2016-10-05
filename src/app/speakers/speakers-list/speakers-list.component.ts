import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import { SpeakersService, Speaker } from '../shared';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css']
})
export class SpeakersListComponent {
  speakers: Speaker[] = this.service.getSpeakers();

  constructor(
    private router: Router,
    private service: SpeakersService
  ) { }

  showBio(id) {
    this.router.navigate(['/speakers', {outlets: {'bio': [id]}}]);
  }
}
