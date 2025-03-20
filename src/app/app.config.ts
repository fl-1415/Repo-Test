import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromProducts from './+state/products.reducer';
import { ProductsEffects } from './+state/products.effects';
import * as fromUsers from './+state/users.reducer';
import { UsersEffects } from './+state/users.effects';
import { UsersFacade } from './+state/users.facade';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(UsersEffects),
    provideState(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
    UsersFacade,
    provideStore(),
    provideEffects(),
    provideEffects(ProductsEffects),
    provideState(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.productsReducer
    ),
    provideStore(),
    provideEffects(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
