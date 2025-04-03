import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  @Input() isVisible: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  pomodoroInput: number = 25;
  shortBreakInput: number = 5;
  longBreakInput: number = 15;

  constructor(private timerService: TimerService) {}

  // Send values to TimerService
  sendPomodoroTime() {
    this.timerService.setPomodoroTime(this.pomodoroInput);
  }

  sendShortBreakTime() {
    this.timerService.setShortBreakTime(this.shortBreakInput);
  }

  sendLongBreakTime() {
    this.timerService.setLongBreakTime(this.longBreakInput);
  }

  onClose() {
    this.isVisible = false;
    this.closeModal.emit();
  }
}
