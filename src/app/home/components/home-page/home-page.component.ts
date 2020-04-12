import {Component} from '@angular/core';

@Component({
  selector: 'arrisca-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'Arrisca';
  desc = `You know your business better but we could be the missing piece that take you another level !!`;
  standingImage = '../../../../assets/images/standing.png';

  constructor() {
  }
}
