import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class HeroesService {

  // tslint:disable-next-line:no-inferrable-types
  fireUrl: string = 'https://heroesapp-a4339.firebaseio.com/heroes.json';

  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe: Heroe) {

  let body = JSON.stringify(heroe);

  let headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

    return this.http.post(this.fireUrl, body, { headers })
            .pipe(map((res: any) => {
              console.log(res);
              return res;

            }));
  }
}
