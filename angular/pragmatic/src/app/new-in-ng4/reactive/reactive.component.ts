import { 
  Component, 
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { BirthDay, AgeUnit, AppState, User } from '../../domain/entities.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;
  computed$: Observable<string>;
  ageSub: Subscription;
  dateOfBirth$: Observable<string>;
  dateOfBirthSub: Subscription;
  constructor(
    private fb: FormBuilder,
    private store$: Store<AppState>) { }

  ngOnInit() {
    this.form = this.fb.group({
      age: ['', Validators.required],
      ageUnit: ['', Validators.required],
      dateOfBirth: ['', Validators.compose([Validators.required, this.validateDate])]
    });

    const initialAge = 33;
    const initialAgeUnit = AgeUnit.Year;
    this.form.controls['age'].setValue(initialAge);
    this.form.controls['ageUnit'].setValue(initialAgeUnit);

    const age$ = this.form.controls['age'].valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .startWith(initialAge);
    
    const ageUnit$ = this.form.controls['ageUnit'].valueChanges
      .distinctUntilChanged()
      .startWith(initialAgeUnit);

    this.computed$ = Observable.combineLatest(age$, ageUnit$, (a, u)=>{
      if(a === undefined || a <= 0 ) return initialAge;
      switch (parseInt(u)) {
        case AgeUnit.Day.valueOf():
          return a;
        case AgeUnit.Month.valueOf():
          return a * 30;
        case AgeUnit.Year.valueOf():
        default:
          return a * 365;
      }
    })
    .map(a => {
      const date = moment().subtract(a, 'days').format('YYYY-MM-DD');
      return date;
    });
    // this.ageSub = this.computed$.subscribe(date => this.form.controls['dateOfBirth'].setValue(date));
    // this.dateOfBirth$ = this.form.controls['dateOfBirth'].valueChanges
    //   .debounceTime(500)
    //   .filter(d => {
    //     if(moment(d).isValid 
    //       && moment(d).isBefore()
    //       && moment(d).year()> 1900) 
    //       return d;
    //   });
    // this.dateOfBirthSub = this.dateOfBirth$.subscribe(date => {
    //   const birth = moment(date, 'YYYY-MM-DD');
    //   const days = moment().diff(birth, 'days');
    //   if(days <= 90) {
    //     this.form.controls['age'].setValue(days);
    //     this.form.controls['ageUnit'].setValue(AgeUnit.Day);
    //   } else if (days <= 720) {
    //     this.form.controls['age'].setValue((days/30).toFixed(0));
    //     this.form.controls['ageUnit'].setValue(AgeUnit.Month);
    //   } else {
    //     this.form.controls['age'].setValue((days/365).toFixed(0));
    //     this.form.controls['ageUnit'].setValue(AgeUnit.Year);
    //   }
    // });
  }

  validateDate(c: FormControl): {[key: string]: any}{
    const result = moment(c.value).isValid 
        && moment(c.value).isBefore()
        && moment(c.value).year()> 1900;
    return {
      "valid": result
    }
  }

  onSubmit() {
    if(!this.form.valid) return;
    const patient = {
      name: this.form.controls['name'].value,
      gender: this.form.controls['gender'].value,
      bloodType: this.form.controls['bloodType'].value,
      dateOfBirth: this.form.controls['dateOfBirth'].value,
    }  
  }
}
