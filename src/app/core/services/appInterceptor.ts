import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AppErrorHandler} from '@core/services/error-handler';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AppInterceptor implements HttpInterceptor {
  private errorHandler: AppErrorHandler;

  constructor(errorHandler: AppErrorHandler) {
    this.errorHandler = errorHandler;
  }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    // set Authorization Header
    // const token: string = localStorage.getItem('arriscaToken');
    const tok = 'Basic ' + btoa('user' + ':' + environment.securityKey);
    httpRequest = httpRequest?.clone({
      headers: httpRequest.headers.set('Authorization', `${tok}`)
    });

    // set  Content-Type
    if (!httpRequest.headers.has('Content-Type')) {
      httpRequest = httpRequest.clone({headers: httpRequest.headers.set('Content-Type', 'application/json')});
    }

    // set Accept Headers
    httpRequest = httpRequest.clone({headers: httpRequest.headers.set('Accept', 'application/json')});

    // set Access Control Origin Headers
    httpRequest = httpRequest.clone({headers: httpRequest.headers.set('Access-Control-Allow-Origin', '*')});
    httpRequest = httpRequest.clone({
      headers: httpRequest.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    });

    return httpHandler.handle(httpRequest).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.dir(event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.errorHandler.handleError(error);
        return throwError(error);
      })
    );
  }
}
