/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListCoffeesComponent } from './list-coffees.component';
import { provideHttpClient } from '@angular/common/http';

describe('ListCoffeesComponent', () => {
  let component: ListCoffeesComponent;
  let fixture: ComponentFixture<ListCoffeesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoffeesComponent ],
      providers: [provideHttpClient()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
