import { Component, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { TrimSpacePipe } from './trim-space.pipe';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  // clock = Observable.interval(1000).do(_=>console.log('observable created'));
  // birthday = new Date();
  // a: number = 0.12345;
  // b: number = 1.09876;
  // myNum: number = 0.1415927;
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  constructor() { }

}
