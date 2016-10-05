import { Component } from '@angular/core';
import { SpeakersService } from './shared';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css'],
  providers: [SpeakersService]
})
export class SpeakersComponent{}
