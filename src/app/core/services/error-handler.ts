import {ErrorHandler, Injectable} from '@angular/core';
import {ErrorLogService} from '@core/services/error-log.service';

@Injectable({providedIn: 'root'})
export class AppErrorHandler extends ErrorHandler {
  constructor(private errorLogService: ErrorLogService) {
    super();
  }

  handleError(error: any): void {
    this.errorLogService.logError(error);
    super.handleError(error);
  }
}
