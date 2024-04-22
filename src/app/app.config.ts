import { ApplicationConfig, PLATFORM_ID, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimations } from '@angular/platform-browser/animations';
import { isPlatformBrowser } from '@angular/common';
import { WINDOW } from './app.tokens';

function windowFactory(platformId: Object): Window | Object {
  return isPlatformBrowser(platformId) ? window : {};
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    { provide: WINDOW, useFactory: windowFactory, deps: [PLATFORM_ID] },
  ],
};
