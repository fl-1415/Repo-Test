import { Route } from '@angular/router';

export const appRoutes: Route[] = [

  {
    path: 'orders',
    loadComponent: () =>
      import('@test-angular-nx/orders').then((m) => m.OrdersComponent),
  },

];
