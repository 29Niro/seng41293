import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './state/app/app.state';
import { provideServiceWorker } from '@angular/service-worker';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    importProvidersFrom(
      NgxsModule.forRoot([AppState], { developmentMode: isDevMode() })
    ),
    importProvidersFrom(
      AngularFireModule.initializeApp({
        apiKey: 'AIzaSyCVTxaFanZYEzVJ0t95ZWDFBUl1UMI7W-U',
          authDomain: 'accounts-b87b0.firebaseapp.com',
          projectId: 'accounts-b87b0',
          storageBucket: 'accounts-b87b0.appspot.com',
          messagingSenderId: '303085279192',
          appId: '1:303085279192:web:131d93b73bf5a8ca6884ad',
      })
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
