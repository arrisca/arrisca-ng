import {AppErrorHandler} from './error-handler';
import {ErrorLogService} from '@core/services/error-log.service';

describe('ErrorHandler', () => {
  it('should create an instance', () => {
    const errorLogService = new ErrorLogService();
    expect(new AppErrorHandler(errorLogService)).toBeTruthy();
  });
});
