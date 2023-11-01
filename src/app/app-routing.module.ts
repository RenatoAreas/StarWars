import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home/home.component';
import { FilmesComponent } from './components/filmes/filmes/filmes.component';
import { RouterModule, Routes } from '@angular/router';
import { NavesComponent } from './components/naves/naves/naves.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'naves', component: NavesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
