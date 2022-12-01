import { Routes } from '@angular/router';
import { NishanthComponent } from '../nishanth/nishanth.component';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

export const FLIGHTS_ROUTES: Routes = [
    {
      path: 'search',
      component: FlightsSearchComponent
    },
    {
      path:'nishanth',
      component:NishanthComponent
    }
];
