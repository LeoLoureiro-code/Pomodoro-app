import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private pomodoroTime = new BehaviorSubject<number>(25);
  private shortBreakTime = new BehaviorSubject<number>(5);
  private longBreakTime = new BehaviorSubject<number>(15);

  private selectedColor = new BehaviorSubject<string>("$color-accessories-red");

  getPomodoroTime() {
    return this.pomodoroTime.asObservable();
  }

  getShortBreakTime() {
    return this.shortBreakTime.asObservable();
  }

  getLongBreakTime() {
    return this.longBreakTime.asObservable();
  }
  
  getSelectedColor() {
    return this.selectedColor.asObservable();
  }

  setPomodoroTime(time: number) {
    this.pomodoroTime.next(time);
  }

  setShortBreakTime(time: number) {
    this.shortBreakTime.next(time);
  }

  setLongBreakTime(time: number) {
    this.longBreakTime.next(time);
  }

  setSelectedColor(color: string) {
    this.selectedColor.next(color);
  }
}
