import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myOwnPipe'
})
export class MyOwnPipePipe implements PipeTransform {

  transform(value: string): any {
    return value.toUpperCase();
  }

}
