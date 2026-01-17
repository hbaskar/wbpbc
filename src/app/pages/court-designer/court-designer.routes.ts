import { Routes } from '@angular/router';

export const courtDesignerRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./court-designer.component').then((m) => m.CourtDesignerComponent),
  },
  {
    path: 'pickleball',
    loadComponent: () =>
      import('./pickleball-designer/pickleball-designer.component').then(
        (m) => m.PickleballDesignerComponent
      ),
  },
  {
    path: 'tennis',
    loadComponent: () =>
      import('./tennis-designer/tennis-designer.component').then(
        (m) => m.TennisDesignerComponent
      ),
  },
  {
    path: 'multi-court',
    loadComponent: () =>
      import('./multi-court-designer/multi-court-designer.component').then(
        (m) => m.MultiCourtDesignerComponent
      ),
  },
  {
    path: 'basketball',
    loadComponent: () =>
      import('./basketball-designer/basketball-designer.component').then(
        (m) => m.BasketballDesignerComponent
      ),
  },
];

