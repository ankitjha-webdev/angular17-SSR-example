import { Routes } from '@angular/router';
import { CsrOnlyGuard } from './guards/csr-only.guard';

const ssrRoutes = new Set(['', 'ssr']);

function configureRoutes(): Routes {
  let routes: Routes = [
    {
      path: 'map',
      loadComponent: () =>
        import('./map/map.component').then((m) => m.MapComponent),
    },
    {
      path: 'about',
      loadComponent: () =>
        import('./about/about.component').then((m) => m.AboutComponent),
    },
    {
      path: '',
      loadComponent: () =>
        import('./home/home.component').then((m) => m.HomeComponent),
    },
    {
      path: 'ssr',
      loadComponent: () =>
        import('./ssrcom/ssrcom.component').then((m) => m.SsrcomComponent),
    },
  ];

  // Dynamically adding canActivate to all routes except the home route
  return routes.map((route) => {
    if (!ssrRoutes.has(route.path || '')) {
      return { ...route, canActivate: [CsrOnlyGuard] };
    }
    return route;
  });
}

export const routes = configureRoutes();
