import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  esNuevo = false;

  constructor(private heroesService: HeroesService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
      this.esNuevo = params['id'] !== 'nuevo' ? false : true;

      if (!this.esNuevo) {
        this.heroesService.getHeroe(params['id'])
        .subscribe(data => this.heroe = data);
        }

        console.log(this.heroe);
      });
  }


  guardar(): void {
      if (this.esNuevo) {
        this.heroesService.nuevoHeroe(this.heroe)
        .subscribe(data => {
          this.router.navigate(['/heroe', data.name]);
        },
        error => console.log(error));
        } else {
        this.actualizar();
      }
    }

  actualizar(): void {
    let id: string;
    this.activatedRouter.params.subscribe( params => {
    id = params['id'];
    });

    this.heroesService.actualizarHeroe(this.heroe, id)
    .subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
    }

    agregarNuevo(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: "Marvel"
    });
    }
}
