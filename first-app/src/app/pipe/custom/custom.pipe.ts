import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increment',
})
// (?: optional parameter)
export class IncrementPipe implements PipeTransform {
  transform(value: number, args?: number): number {
    if (args != undefined) {
      return value + args;
    }
    return value + 1;
  }
}

@Pipe({
  name: 'decrement',
})
// (?: optional parameter)
export class DecrementPipe implements PipeTransform {
  transform(value: number, args?: number): number {
    if (args != undefined) {
      return value - args;
    }
    return value - 1;
  }
}

@Pipe({
  name: 'sum',
})
export class SumPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    for (let i of args) {
      for (let j = 0; j < i.length; j++) {
        console.log(i[0]);
        value += i[j];
      }
      
      console.log(value);
    }
    return value;
  }
}
