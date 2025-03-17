import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimerComponent } from "../components/timer/timer.component";
import { ClockComponent } from "../components/clock/clock.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimerComponent, ClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pomodoro-app';
}
