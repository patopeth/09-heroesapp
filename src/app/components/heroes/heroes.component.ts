import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  loading = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.loading = true;
    this.traerHeroes();
  }

  traerHeroes(): any {
    this.heroesService.listarHeroes()
    .subscribe(data => {
      this.heroes = data;
      console.log(this.heroes);
      this.loading = false;
    },
    error => console.log(error));
    }

    eliminarHeroe(k: string) {
      this.heroesService.borrarHeroe(k)
      .subscribe(data => {
        if (data) { // según la docu si te de vuelve algo significa que falló, te tiene que devolver null
console.log(data);
        } else {
          // todo bien
          delete this.heroes[k];
        }
      },
      error => console.log(error));
      }
}
