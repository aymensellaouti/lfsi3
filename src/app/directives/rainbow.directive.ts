import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  @HostBinding('style.color') color = 'red';
  constructor() {}
  @HostListener('keyup') changeColor() {
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
