/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListCoffeesComponent } from './list-coffees.component';
import { provideHttpClient } from '@angular/common/http';
import { Coffee } from '../coffee';
import { faker } from '@faker-js/faker';

describe('ListCoffeesComponent', () => {
  let component: ListCoffeesComponent;
  let fixture: ComponentFixture<ListCoffeesComponent>;
  let debug: DebugElement;

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
    for(let i = 0; i < 3; i++) {
      const coffee = new Coffee(
        faker.number.int({ min: 1, max: 10 }), //id
        faker.commerce.productName(), // nombre
        faker.commerce.productMaterial(), // tipo
        [faker.location.country(), faker.location.country()], // región 
        [faker.commerce.productAdjective(), faker.commerce.productAdjective()], // sabor
        faker.number.int({ min: 800, max: 2500 }), // altura
        faker.image.urlPicsumPhotos() // imagen 
      );
      component.coffes.push(coffee);

                                }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it("Component has a table with 3 rows", () => {
    expect(debug.queryAll(By.css(".rd"))).toHaveSize(3);
  })

  it("Component has a table with 1 header", () => {
    expect(debug.queryAll(By.css("thead"))).toHaveSize(1);
  })
});
