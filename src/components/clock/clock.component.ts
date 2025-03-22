import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})


export class ClockComponent {

//Variables
millisecondsInSecond:number = 1000;
millisecondsInMinute:number = this.millisecondsInSecond * 60;

timerMinutes?:number;
timerSeconds?:number;




Start(){ 
}
}
