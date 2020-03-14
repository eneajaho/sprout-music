import { Component, OnInit } from '@angular/core';
import {Album} from '../../models/Album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  albums: Album[] = [
    {
      author: 'Eminem',
      cover: 'https://upload.wikimedia.org/wikipedia/en/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
      songsNumber: 5,
      title: 'Music to be murdered by'
    },
    {
      author: 'Eminem',
      cover: 'https://upload.wikimedia.org/wikipedia/en/6/62/Eminem_-_Kamikaze.jpg',
      songsNumber: 6,
      title: 'Kamikaze'
    },
    {
      author: 'Eminem',
      cover: 'https://upload.wikimedia.org/wikipedia/en/6/62/Eminem_-_Kamikaze.jpg',
      songsNumber: 6,
      title: 'Kamikaze'
    },
    {
      author: 'Eminem',
      cover: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Encore_%28Eminem_album%29_coverart.jpg',
      songsNumber: 5,
      title: 'Encore'
    },
    {
      author: 'Eminem',
      cover: 'https://upload.wikimedia.org/wikipedia/en/a/ae/The_Marshall_Mathers_LP.jpg',
      songsNumber: 5,
      title: 'The Marshall Mathers LP'
    },
    {
      author: 'Eminem',
      cover: 'https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg',
      songsNumber: 5,
      title: 'The Eminem Show'
    }
  ];

  ngOnInit(): void {
  }

}
