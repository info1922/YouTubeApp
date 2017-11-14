import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyBYJpdYPrb112SVKtjGgYiLd6QKcx8B-Y8';
  private playList = 'UUblfuW_4rakIf2h6aqANefA';
  private nextPageToken = '';


  constructor( public _http: Http) { }

  getVideos () {

    const url = `${this.youtubeUrl}/playlistItems`;
    const parametros = new URLSearchParams();

    parametros.set('part', 'snippet');
    parametros.set('maxResults', '10');
    parametros.set('playlistId', this.playList);
    parametros.set('key', this.apikey);

    return this._http.get(url, { search: parametros })
                .map(res => {
                  console.log(res.json());
                  this.nextPageToken = res.json().nextPageToken;

                  const videos: any[] = [];

                  for (const video of res.json().items) {
                    const snippet = video.snippet;
                    videos.push(snippet);
                  }

                  return videos;

                });

  }
}
