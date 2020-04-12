import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomePageComponent} from './components/home-page/home-page.component';
import {SharedModule} from '@shared/shared.module';
import {WaveButtonComponent} from './components/wave-button/wave-button.component';

@NgModule({
  declarations: [HomePageComponent, WaveButtonComponent],
  imports: [
    SharedModule.forFeature(),
    HomeRoutingModule
  ]
})
export class HomeModule {
}
