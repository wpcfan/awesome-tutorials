import {
  Directive,
  HostListener
} from '@angular/core';

@Directive({
    selector: "[log-on-click]",
})
export class LogOnClickDirective {

    constructor() {}
    @HostListener('click')
    onClick() { console.log('I am clicked!'); }
}