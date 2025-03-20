import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from "../components/clock/clock.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pomodoro-app';
}
