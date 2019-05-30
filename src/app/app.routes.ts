import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const appRoutes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];
