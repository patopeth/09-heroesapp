import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"; // para poder utilizar todo lo que exporta este modulo, lo de ngForm, pristine, valid, etc

import { APP_ROUTING } from './app.routes';

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroes/heroe.component";

// Services
import { HeroesService } from "./services/heroes.service";
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
     HeroeComponent,
      HeroesComponent,
      KeysPipe
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
