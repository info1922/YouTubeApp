import { Component, OnInit } from '@angular/core';

// Servicio
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSel: any;

  constructor( public _yts: YoutubeService ) {

    _yts.getVideos().subscribe( videos => {
      console.log(videos);
      this.videos = videos;
    });

  }

  ngOnInit() {
  }

  verVideo (video: any) {

    this.videoSel = video;
    console.log('Click');

  }

}
