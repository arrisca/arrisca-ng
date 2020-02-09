import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'platform'
})
export class ErrorLogService {
  private name = 'ErrorLogService';

  constructor() {
  }

  logError(error: any) {
    const errorDate = new Date().toISOString();
    switch (error) {
      case error instanceof HttpErrorResponse:
        console.error(errorDate, 'There was an HTTP error.', error.message, 'Status code:', (error as HttpErrorResponse).status);
        break;
      case error instanceof TypeError:
        console.error(errorDate, 'There was a Type error.', error.message);
        break;
      case error instanceof Error:
        console.error(errorDate, 'There was a general error.', error.message);
        break;
      default:
        console.error(errorDate, 'Nobody threw an error but something happened!', error);
    }
  }
}
