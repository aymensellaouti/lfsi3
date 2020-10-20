import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomPipe',
})
export class RandomPipePipe implements PipeTransform {
  transform(random: number, ...args: number[]): number {
    return Math.floor(random * Math.random() * args[0] * args[1]);
  }
}
