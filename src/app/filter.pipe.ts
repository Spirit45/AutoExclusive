import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cars: any, args: any): any {
    if(args == undefined){
      return cars;
    }
    return cars.filter(function(cars){
      return cars.plate.includes(args);
    })
  }

}
