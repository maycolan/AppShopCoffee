import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeesService } from '../coffees.service';

@Component({
  selector: 'app-list-coffees',
  templateUrl: './list-coffees.component.html',
  styleUrls: ['./list-coffees.component.css'],
  standalone: false
})
export class ListCoffeesComponent implements OnInit {

  coffes: Array<Coffee>=[];

  constructor(private coffeesService: CoffeesService) { }

  ngOnInit() {
    this.getCoffes();
  }

  getCoffes(): void{
      this.coffeesService.getCoffes().subscribe((data)=>{this.coffes=data;});
  }
}
