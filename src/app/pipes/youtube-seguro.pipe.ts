import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'youtubeSeguro'
})
export class YoutubeSeguroPipe implements PipeTransform {

  constructor (private _ds: DomSanitizer) {

  }

  transform(value: string): any {
    const url = 'https://www.youtube.com/embed/';

    return this._ds.bypassSecurityTrustResourceUrl( url + value);

  }

}
