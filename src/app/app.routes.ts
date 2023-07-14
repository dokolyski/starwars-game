import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./initial-page').then((m) => m.InitialPageComponent),
  },
  {
    path: 'select-resource',
    loadComponent: () =>
      import('./select-resource').then((m) => m.SelectResourceComponent),
  },
  {
    path: 'game',
    loadComponent: () => import('./game-view').then((m) => m.GameViewComponent),
  },
];
