import { Equipos } from './equipos/equipos';
import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {
      path: '',
      component: Home,
      pathMatch: 'full'

    },

    {
      path: 'equipos',
      component: Equipos
    }

];
