import { Component } from '@angular/core';

@Component({
  selector: 'clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent {

timeTest: number = 25;

timerMinutes: number = this.timeTest - 1;
timerSeconds: number = 59;

second: number = 1000;
minutes: number = this.second * 60;

Start(){
 
  setTimeout(function() {
    
}, 1000);
}

}
