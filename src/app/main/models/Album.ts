import {Song} from './Song';

export interface Album {
  songs?: Song[];
  songsNumber: number;
  cover: string;
  author: string;
  title: string;
}

