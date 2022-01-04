import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'restaurants',
    children: [
      {
        path: ':id',
        loadChildren: () => import('./features/restaurant/restaurant.module')
        .then(m => m.RestaurantModule)
      },
      {path: '', redirectTo: '/', pathMatch: 'full'}
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
