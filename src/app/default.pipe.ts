import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(value: string, fallback: string, forceHttp:boolean = false): string {
    let image = "";
    if (value) {
      image = value;
    } else {
      image = fallback;
    }
    if(forceHttp){
      if(image.indexOf('https') === -1){
        image = image.replace('http', 'https');
      }
    }
     return image;
  }

}
