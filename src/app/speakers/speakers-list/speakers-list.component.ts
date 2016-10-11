import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { SpeakersService, Speaker } from '../shared';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css']
})
export class SpeakersListComponent implements OnInit {
  speakers: Speaker[] = [];

  constructor(
    private router: Router,
    private service: SpeakersService
  ) { }

  ngOnInit() {
    this.speakers = this.service.getSpeakers();
  }

  showBio(id) {
    this.router.navigate(['/speakers', {outlets: {'bio': [id]}}]);
  }
}
