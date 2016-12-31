/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneComponent } from './one.component';

describe('OneComponent', () => {
  let component: OneComponent;
  let fixture: ComponentFixture<OneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
