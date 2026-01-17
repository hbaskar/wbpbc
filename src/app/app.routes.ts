import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'residential',
    loadChildren: () =>
      import('./pages/residential/residential.routes').then(
        (m) => m.residentialRoutes
      ),
  },
  {
    path: 'commercial',
    loadChildren: () =>
      import('./pages/commercial/commercial.routes').then(
        (m) => m.commercialRoutes
      ),
  },
  {
    path: 'court-designer',
    loadChildren: () =>
      import('./pages/court-designer/court-designer.routes').then(
        (m) => m.courtDesignerRoutes
      ),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.routes').then((m) => m.blogRoutes),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
];
