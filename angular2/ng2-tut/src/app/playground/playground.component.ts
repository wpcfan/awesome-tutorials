import { 
  Component, 
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  animations: [
    trigger('signal', [
      state('void', style({
        'transform':'translateY(-100%)'
      })),
      state('go', style({
        'background-color': 'green', 
        'height':'100px'
      })),
      state('stop', style({
          'background-color':'red',
          'height':'50px'
      })),
      transition('void => *', animate(5000, keyframes([
        style({'transform': 'scale(0)', 'padding': '0px'}),
        style({'transform': 'scale(0.1)', 'padding': '50px'}),
        style({'transform': 'scale(0.5)', 'padding': '100px'}),
        style({'transform': 'scale(0.9)', 'padding': '120px'}),
        style({'transform': 'scale(0.95)', 'padding': '135px'}),
        style({'transform': 'scale(1)', 'padding': '140px'})
      ]))),
      transition('* => *', animate('.5s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
    ])
  ]
})
export class PlaygroundComponent {
  // clock = Observable.interval(1000).do(_=>console.log('observable created'));
  signal: string;
  isVisible: boolean = true;
  birthday = new Date();
  pi: number = 3.1415927;
  a: number = 5.03;
  b: number = 0.56;
  myNum: number = 0.1415927;
  object: Object = {
  foo: 'bar', 
  baz: 'qux', 
  nested: {
    xyz: 3, 
    numbers: [1, 2, 3, 4, 5]
  }
}; 
  constructor() { }

  onGo(){
    this.signal = 'go';
  }
  onStop(){
    this.signal = 'stop';
  }

  toggle(){
    this.isVisible = !this.isVisible;
  }
}
