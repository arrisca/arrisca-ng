# ArriscaNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Must TODO:
. Check and confirm for unsubscription for all subscriber
. User Pure Pipe
. Use TrackBy for *NgFor
. No function call in template
. Use Lazy loading (not default route) and PreLoading strategy
## Error Handling *Very Important*
[AngularErrorHandler](https://angular.io/guide/http#getting-error-details)
.   import { Observable, throwError } from 'rxjs';
    import { catchError, retry } from 'rxjs/operators';
    getConfig() {
      return this.http.get<Config>(this.configUrl)
        .pipe(
          retry(3), // retry a failed request up to 3 times
          catchError(this.handleError) // then handle the error from global AppErrorHandler.ts
        );
    }
