import { Component, OnInit } from '@angular/core';

// Servicio
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  videos: any[] = [];

  constructor( public _yts: YoutubeService ) {

    _yts.getVideos().subscribe( videos => {
      console.log(videos);
      this.videos = videos;
    });

  }

  ngOnInit() {
  }

}
