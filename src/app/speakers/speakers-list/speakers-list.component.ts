import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css']
})
export class SpeakersListComponent implements OnInit {
  speakers: {}[] = [
    {name: 'Luke Ruebbelke', src: 'luke.jpg', bio: 'Luke bio'},
    {name: 'Ben Lesh', src: 'ben.jpg', bio: 'Ben bio'},
    {name: 'Gleb Bahmutov', src: 'gleb.jpg', bio: 'Gleb bio'},
    {name: 'Jeff Whelpley', src: 'jeff.jpg', bio: 'Jeff bio'},
    {name: 'Pascal Precht', src: 'pascal.jpg', bio: 'Pascal bio'},
    {name: 'Victor Savkin', src: 'victor.jpg', bio: 'Victor bio'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
