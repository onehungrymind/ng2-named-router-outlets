import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService, Speaker } from '../shared';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  currentSpeaker: Speaker;

  constructor(
    private route: ActivatedRoute,
    private service: SpeakersService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: {id: string}) => {
      this.currentSpeaker = this.service.getSpeakerByID(params.id);
    });
  }
}
