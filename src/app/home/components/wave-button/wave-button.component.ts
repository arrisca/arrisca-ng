import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'arrisca-wave-button',
  templateUrl: './wave-button.component.html',
  styleUrls: ['./wave-button.component.scss']
})
export class WaveButtonComponent implements OnInit, AfterViewInit {
  count = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const button: any = document.querySelector('.liquid-button');
    const animationInterval = setInterval(() => {
      if (this.count < 100) {
        this.count++;
        button.innerText = this.count + '%';
        button.style.animation = 'wave 5500ms ease-in-out forwards';
        this.count < 55
          ? (button.style.color = '#000')
          : (button.style.color = '#fff');
      } else {
        clearInterval(animationInterval);
        // this.router.navigate(['product']).then(res => console.log(`navigated to product module , ${res}`));
      }
    }, 40);
  }
}
