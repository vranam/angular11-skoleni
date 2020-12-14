import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbers'
})
export class NumbersPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case 1: return 'jedna';
      case 2: return 'dva';
      default: return 'moc';
    }
  }

}
