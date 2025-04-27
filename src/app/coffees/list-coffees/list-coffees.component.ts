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
  totalCoffeesOrigen: number = 0;
  totalCoffeesBlend: number = 0;

  constructor(private coffeesService: CoffeesService) { }

  ngOnInit() {
    this.getCoffes();
  }

  getCoffes(): void{
      this.coffeesService.getCoffes().subscribe((data)=>{
        this.coffes=data;
        this.contarTipos();
      });

  }

  contarTipos():void{
    for (let i = 0; i < this.coffes.length; i++) {
      if(this.coffes[i].tipo==="Blend"){this.totalCoffeesOrigen++;}
      if(this.coffes[i].tipo==="Café de Origen"){this.totalCoffeesBlend++;}
    }
  }
}
