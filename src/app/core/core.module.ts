import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppErrorHandler} from '@core/services/error-handler';
import {ErrorLogService} from '@core/services/error-log.service';
import {AppInterceptor} from '@core/services/appInterceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ErrorLogService,
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ]
})
/**
 * All Application level Singleton services should be implemented here
 */
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('Core Module is already loaded, please load it only in AppModule!!');
    }
  }
}
