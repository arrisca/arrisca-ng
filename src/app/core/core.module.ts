import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppErrorHandler} from '@core/services/error-handler';
import {ErrorLogService} from '@core/services/error-log.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
    ErrorLogService
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
