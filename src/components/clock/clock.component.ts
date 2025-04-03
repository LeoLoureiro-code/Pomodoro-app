import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit {
  constructor(private elementRef: ElementRef, private timerService: TimerService) {}

  // Timer Durations (User inputs from service)
  pomodoroTime: number = 25;
  shortBreakTime: number = 5;
  longBreakTime: number = 15;

  // Convert minutes to seconds
  pomodoroTimeInSeconds: number = this.pomodoroTime * 60;
  shortBreakTimeInSeconds: number = this.shortBreakTime * 60;
  longBreakTimeInSeconds: number = this.longBreakTime * 60;

  totalSeconds: number = this.pomodoroTimeInSeconds; 
  timerMinutes!: string;
  timerSeconds!: string;
  timerTracker!: any;
  cycleIndex: number = 0;
  isRunning: boolean = false;

  currentSessionType: 'pomodoro' | 'short-break' | 'long-break' = 'pomodoro';

  sessionSequence: { type: string; duration: number }[] = [];

  // Buttons
  startBtn!: HTMLElement;
  pauseBtn!: HTMLElement;

  ngOnInit() {
    this.startBtn = this.elementRef.nativeElement.querySelector(".start-btn");
    this.pauseBtn = this.elementRef.nativeElement.querySelector(".pause-btn");

    // Get updated timer values from service
    this.timerService.getPomodoroTime().subscribe((pomodoroTime) => {
      this.pomodoroTime = pomodoroTime;
      this.updateSessionDurations();
    });

    this.timerService.getShortBreakTime().subscribe((shortTime) => {
      this.shortBreakTime = shortTime;
      this.updateSessionDurations();
    });

    this.timerService.getLongBreakTime().subscribe((longTime) => {
      this.longBreakTime = longTime;
      this.updateSessionDurations();
    });

    this.DisplayTime();
  }

  updateSessionDurations() {
    
    // Convert minutes to seconds
    this.pomodoroTimeInSeconds = this.pomodoroTime * 60;
    this.shortBreakTimeInSeconds = this.shortBreakTime * 60;
    this.longBreakTimeInSeconds = this.longBreakTime * 60;

    // Update session sequence
    this.sessionSequence = [
      { type: 'pomodoro', duration: this.pomodoroTimeInSeconds },
      { type: 'short-break', duration: this.shortBreakTimeInSeconds },
      { type: 'pomodoro', duration: this.pomodoroTimeInSeconds },
      { type: 'short-break', duration: this.shortBreakTimeInSeconds },
      { type: 'pomodoro', duration: this.pomodoroTimeInSeconds },
      { type: 'short-break', duration: this.shortBreakTimeInSeconds },
      { type: 'pomodoro', duration: this.pomodoroTimeInSeconds },
      { type: 'long-break', duration: this.longBreakTimeInSeconds },
    ];

    // Reset to first session
    this.cycleIndex = 0;
    this.totalSeconds = this.sessionSequence[this.cycleIndex].duration;
    this.currentSessionType = this.sessionSequence[this.cycleIndex].type as any;
    this.DisplayTime();
  }

  UpdateCountDown() {
    this.timerTracker = setInterval(() => {
      if (this.totalSeconds <= 0) {
        clearInterval(this.timerTracker);
        this.MoveToNextSession();
      } else {
        this.DisplayTime();
        this.totalSeconds -= 1;
      }
    }, 1000);
  }

  DisplayTime() {
    const seconds = this.totalSeconds % 60;
    const minutes = Math.floor(this.totalSeconds / 60);
    this.timerMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    this.timerSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  StartTimer() {
    this.pauseBtn.style.display = "block";
    this.startBtn.style.display = "none";
    this.UpdateCountDown();
  }

  PauseTimer() {
    clearInterval(this.timerTracker);
    this.pauseBtn.style.display = "none";
    this.startBtn.style.display = "block";
    this.DisplayTime();
  }

  MoveToNextSession() {
    this.cycleIndex++;

    if (this.cycleIndex >= this.sessionSequence.length) {
      this.isRunning = false;
      return;
    }

    this.totalSeconds = this.sessionSequence[this.cycleIndex].duration;
    this.currentSessionType = this.sessionSequence[this.cycleIndex].type as any;
    this.UpdateCountDown();
  }
}
