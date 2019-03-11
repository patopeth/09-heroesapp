import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    casa: "Marvel",
    bio: ""
  };

  constructor(private heroesService: HeroesService,
    private router: Router) { }

  ngOnInit() {
  }


  guardar(): void {

this.heroesService.nuevoHeroe(this.heroe)
.subscribe(data => {
  this.router.navigate(['/heroe', data.name]);
},
error => console.log(error));
  }
}
