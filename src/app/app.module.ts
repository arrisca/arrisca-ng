import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core';
import {ServiceWorkerModule} from '@angular/service-worker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import {ProductModule} from './product/product.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './core/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppInterceptor} from '@core/services/appInterceptor';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    ProductModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument({name: 'Arrisca', maxAge: 25}) : []
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
