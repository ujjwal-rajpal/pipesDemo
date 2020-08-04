import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  // propname is for filter a type of srvers like online and ofline
  transform(value: any, filter: string, propName: string): any {
    if(value.length === 0 || filter === '')
    return value;
    const resultArray = []
    value.forEach(element => {
      if(element['serverStatus'] === filter){
        resultArray.push(element)
      }
    });
    return resultArray;
  }
  


}
