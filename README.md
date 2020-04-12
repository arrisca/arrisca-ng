# ArriscaNg

Angular v9.1 Starter 

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
