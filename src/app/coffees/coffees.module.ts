import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoffeesComponent } from './list-coffees/list-coffees.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListCoffeesComponent],
  exports: [ListCoffeesComponent]
})
export class CoffeesModule { }
