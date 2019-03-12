import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class HeroesService {

  // tslint:disable-next-line:no-inferrable-types
  fireUrl: string = 'https://heroesapp-a4339.firebaseio.com/heroes.json';
  // tslint:disable-next-line:no-inferrable-types
  firePutUrl: string = 'https://heroesapp-a4339.firebaseio.com/heroes/';

  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe: Heroe) {
  let body = JSON.stringify(heroe);

  let headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

    return this.http.post(this.fireUrl, body, { headers })
            .pipe(map((res: any) => {
              return res;
            }));
  }

  actualizarHeroe(heroe: Heroe, id: string) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url = `${this.firePutUrl}${id}.json`;

    return this.http.put(url, body, { headers })
              .pipe(map((res: any) => {
                return res;
              }));
    }

    getHeroe(id: string) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let url = `${this.firePutUrl}${id}.json`;

      return this.http.get(url, { headers })
      .pipe(map((res: any) => {
        return res;
      }));

    }

    borrarHeroe(id: string) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      let url = `${this.firePutUrl}${id}.json`;

      return this.http.delete(url, { headers })
      .pipe(map((res: any) => {
        return res;
      }));

    }

    listarHeroes() {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      return this.http.get(this.fireUrl, { headers })
                .pipe(map((res: any) => {
                  return res;
                }));
      }
    }
