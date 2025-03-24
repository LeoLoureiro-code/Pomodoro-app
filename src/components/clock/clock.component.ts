import { Component, OnInit, ElementRef } from '@angular/core';

enum Status {
  START = 'START',
  PAUSE = 'PAUSE'
};

@Component({
  selector: 'clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})

export class ClockComponent implements OnInit{


constructor(private elementRef: ElementRef){

}

//Variables
startBtn!: HTMLElement;
pauseBtn!: HTMLElement;

pomodoroTime: number = 25;
shortBreakTime: number = 5;
longBreakTime: number = 15;

totalSeconds = this.pomodoroTime * 60;

timerMinutes!:string;
timerSeconds!:string;
timerTracker!:any;
status = Status.START;



ngOnInit(){
  this.displayTime();
  this.startBtn = this.elementRef.nativeElement.querySelector(".start-btn");
  this.pauseBtn = this.elementRef.nativeElement.querySelector(".pause-btn");
}



UpdateCountDown(){
  this.timerTracker = setInterval(() =>{
    if(this.totalSeconds <= 0){
      clearInterval(this.timerTracker);
      this.setStatus(Status.START);
      this.displayTime()
    }
    this.displayTime();
    this.totalSeconds -=1;
  }, 1000);
}

displayTime() {
  const seconds = this.totalSeconds % 60;
  const minutes = Math.floor((this.totalSeconds - seconds) / 60);

  this.timerMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
  this.timerSeconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;;
}

startTimer() {
  this.setStatus(Status.PAUSE);
  this.pauseBtn.style.display = "block";
  this.startBtn.style.display = "none";
  this.UpdateCountDown();
}

pauseTimer() {
  clearInterval(this.timerTracker);
  this.setStatus(Status.START);
  this.pauseBtn.style.display = "none";
  this.startBtn.style.display = "block";
  this.displayTime()
}

setStatus(newStatus: Status){
  this.status = newStatus;
  switch(newStatus){
    case Status.START:
      break;

    case Status.PAUSE:
      
  }
}
}
