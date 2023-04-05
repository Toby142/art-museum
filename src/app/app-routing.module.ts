import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import home component
import { HomeComponent } from './pages/home/home.component';
import { PaintersComponent } from './pages/painters/painters.component';
import { ArtworksComponent } from './pages/artworks/artworks.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'painters', component: PaintersComponent},
  {path: 'artworks', component: ArtworksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
