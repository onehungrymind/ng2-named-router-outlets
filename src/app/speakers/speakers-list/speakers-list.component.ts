import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { SpeakersService } from '../shared';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css']
})
export class SpeakersListComponent implements OnInit {
  speakers: {}[] = this.service.getSpeakers();

  constructor(private router: Router, private service: SpeakersService) { }

  ngOnInit() {
  }

  showBio(id) {
    this.router.navigate(['/speakers', {outlets: {'bio': [id]}}]);
  }
}
