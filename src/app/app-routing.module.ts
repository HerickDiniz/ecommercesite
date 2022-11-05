import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/home/login/login.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { AlmofadasComponent } from './pages/home/itens/almofadas/almofadas.component';
import { AnimesComponent } from './pages/home/itens/animes/animes.component';
import { CamisetasComponent } from './pages/home/itens/camisetas/camisetas.component';
import { FilmesComponent } from './pages/home/itens/filmes/filmes.component';
import { GamesComponent } from './pages/home/itens/games/games.component';
import { LivrosComponent } from './pages/home/itens/livros/livros.component';
import { QuadrinhosComponent } from './pages/home/itens/quadrinhos/quadrinhos.component';
import { SeriesComponent } from './pages/home/itens/series/series.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'menu', component: MenuComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path:'navbar', component: NavbarComponent},
  {path: 'almofadas', component: AlmofadasComponent},
  {path: 'animes', component: AnimesComponent},
  {path: 'camisetas', component: CamisetasComponent},
  {path: 'filmes', component: FilmesComponent},
  {path:'games', component:GamesComponent},
  {path: 'livros', component: LivrosComponent},
  {path: 'quadrinhos', component: QuadrinhosComponent},
  {path:'series', component: SeriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
