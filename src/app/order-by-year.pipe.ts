import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByYearPipe implements PipeTransform {

  transform(cars: any, args: any): any {

    if (cars){
      let orderByValue=args[0]
      let byVal=1

      if(orderByValue.charAt(0)=="!"){
        byVal=-1
      }

      cars.sort((a:any, b:any) => {
        if(a.year <b.year){
          return -1*byVal;
        }
        else if(a.year >b.year){
          return 1*byVal;
        }
        else{
          return 0;
        }
      });
      return cars;
    }

  }

}
