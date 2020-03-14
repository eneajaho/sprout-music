import {Component, OnInit} from '@angular/core';
import {Album} from '../../models/Album';
import {Song} from '../../models/Song';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  constructor() {
  }

  album: Album = {
      author: 'Eminem',
      cover: 'https://upload.wikimedia.org/wikipedia/en/8/80/Eminem_-_Music_to_Be_Murdered_By.png',
      songsNumber: 5,
      title: 'Music to be murdered by'
    };

  songs: Song[] = [
    {
      title: 'Stepdad',
      author: 'Eminem',
      id: 1,
      length: '3:51',
      cover: 'https://upload.wikimedia.org/wikipedia/en/8/80/Eminem_-_Music_to_Be_Murdered_By.png'
    },
    {
      title: 'Darkness',
      author: 'Eminem',
      id: 1,
      length: '3:32',
      cover: 'https://upload.wikimedia.org/wikipedia/en/8/80/Eminem_-_Music_to_Be_Murdered_By.png'
    },
    {
      title: 'Leaving Heaven',
      author: 'Eminem & Skylar',
      id: 1,
      length: '3:51',
      cover: 'https://upload.wikimedia.org/wikipedia/en/8/80/Eminem_-_Music_to_Be_Murdered_By.png'
    }
  ];

  ngOnInit(): void {
  }

}
