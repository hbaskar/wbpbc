import { Routes } from '@angular/router';
import { ResidentialComponent } from './residential.component';

export const residentialRoutes: Routes = [
  {
    path: '',
    component: ResidentialComponent,
  },
  {
    path: 'pickleball-courts-construction',
    loadComponent: () =>
      import(
        './pickleball-courts-construction/pickleball-courts-construction.component'
      ).then((m) => m.PickleballCourtsConstructionComponent),
  },
  {
    path: 'multi-sport-construction',
    loadComponent: () =>
      import(
        './multi-sport-construction/multi-sport-construction.component'
      ).then((m) => m.MultiSportConstructionComponent),
  },
  {
    path: 'basketball-courts',
    loadComponent: () =>
      import('./basketball-courts/basketball-courts.component').then(
        (m) => m.BasketballCourtsComponent
      ),
  },
  {
    path: 'artificial-turf-putting-greens',
    loadComponent: () =>
      import(
        './artificial-turf-putting-greens/artificial-turf-putting-greens.component'
      ).then((m) => m.ArtificialTurfPuttingGreensComponent),
  },
  {
    path: 'court-fencing',
    loadComponent: () =>
      import('./court-fencing/court-fencing.component').then(
        (m) => m.ResidentialCourtFencingComponent
      ),
  },
  {
    path: 'hoops-nets',
    loadComponent: () =>
      import('./hoops-nets/hoops-nets.component').then(
        (m) => m.HoopsNetsComponent
      ),
  },
  {
    path: 'custom-courts',
    loadComponent: () =>
      import('./custom-courts/custom-courts.component').then(
        (m) => m.CustomCourtsComponent
      ),
  },
  {
    path: 'pickleball-court-resurfacing',
    loadComponent: () =>
      import(
        './pickleball-court-resurfacing/pickleball-court-resurfacing.component'
      ).then((m) => m.PickleballCourtResurfacingComponent),
  },
];

