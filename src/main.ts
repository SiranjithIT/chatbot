import { bootstrapApplication, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { provideZoneChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(withFetch()), provideZoneChangeDetection({eventCoalescing:true}), provideClientHydration(withEventReplay())]
});
