import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './pages/home/login/login.component';
import {MatCardModule} from '@angular/material/card';
import { ItensComponent } from './pages/home/itens/itens.component';
import { AlmofadasComponent } from './pages/home/itens/almofadas/almofadas.component';
import { AnimesComponent } from './pages/home/itens/animes/animes.component';
import { CamisetasComponent } from './pages/home/itens/camisetas/camisetas.component';
import { FilmesComponent } from './pages/home/itens/filmes/filmes.component';
import { GamesComponent } from './pages/home/itens/games/games.component';
import { LivrosComponent } from './pages/home/itens/livros/livros.component';
import { QuadrinhosComponent } from './pages/home/itens/quadrinhos/quadrinhos.component';
import { SeriesComponent } from './pages/home/itens/series/series.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ItensComponent,
    AlmofadasComponent,
    AnimesComponent,
    CamisetasComponent,
    FilmesComponent,
    GamesComponent,
    LivrosComponent,
    QuadrinhosComponent,
    SeriesComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
