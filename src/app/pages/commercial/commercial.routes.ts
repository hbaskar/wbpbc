import { Routes } from '@angular/router';
import { CommercialComponent } from './commercial.component';

export const commercialRoutes: Routes = [
  {
    path: '',
    component: CommercialComponent,
  },
  {
    path: 'indoor-pickleball-court',
    loadComponent: () =>
      import(
        './indoor-pickleball-court/indoor-pickleball-court.component'
      ).then((m) => m.IndoorPickleballCourtComponent),
  },
  {
    path: 'tennis-court-resurfacing',
    loadComponent: () =>
      import(
        './tennis-court-resurfacing/tennis-court-resurfacing.component'
      ).then((m) => m.TennisCourtResurfacingComponent),
  },
  {
    path: 'court-fencing',
    loadComponent: () =>
      import('./court-fencing/court-fencing.component').then(
        (m) => m.CommercialCourtFencingComponent
      ),
  },
  {
    path: 'court-resurfacing',
    loadComponent: () =>
      import('./court-resurfacing/court-resurfacing.component').then(
        (m) => m.CourtResurfacingComponent
      ),
  },
  {
    path: 'adding-pickleball-lines',
    loadComponent: () =>
      import(
        './adding-pickleball-lines/adding-pickleball-lines.component'
      ).then((m) => m.AddingPickleballLinesComponent),
  },
  {
    path: 'tennis-court-construction',
    loadComponent: () =>
      import(
        './tennis-court-construction/tennis-court-construction.component'
      ).then((m) => m.TennisCourtConstructionComponent),
  },
];

