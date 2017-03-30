import { 
  Component, 
  OnInit,
  Output,
  Input,
  EventEmitter 
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Auth } from '../../domain/entities.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  auth$: Observable<Auth>;
  
  @Output("toggle") clickHandler: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private store$: Store<AppState>) { 
      this.auth$ = this.store$.select(appState => appState.auth);
    }

  ngOnInit() {
  }
  
  onClick() {
    this.clickHandler.emit();
  }
}
