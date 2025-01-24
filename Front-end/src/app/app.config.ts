import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './core/reducers';
import { provideEffects } from '@ngrx/effects';
import { HomeEffect } from '../pages/home/state/home.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(reducers), provideEffects([HomeEffect]) , provideHttpClient()]
};
