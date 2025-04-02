import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {


  private pomodoroTimer = new BehaviorSubject(0);
  currentPomodoroTimer = this.pomodoroTimer.asObservable();

  private shortBreakTimer = new BehaviorSubject(0);
  currentShortBreakTimer = this.shortBreakTimer.asObservable();

  private longBreakTimer = new BehaviorSubject(0);
  currentLongBreakTimer = this.longBreakTimer.asObservable();

  constructor() { }

  UpdatePomodoroTimer(newPomodoroTimer:number){
    this.pomodoroTimer.next(newPomodoroTimer);
  }

  UpdateShortBreakTimer(newShortBreakTimer:number){
    this.shortBreakTimer.next(newShortBreakTimer);
  }

  UpdateLongBreakTimer(newLongBreakTimer:number){
    this.longBreakTimer.next(newLongBreakTimer);
  }

}
