import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal-service.service';
import { Subscription } from 'rxjs';
import { ClockComponent } from "../components/clock/clock.component";
import { SettingsComponent } from "../components/settings/settings.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockComponent, SettingsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'Pomodoro-app';
  isModalVisible: boolean = false;
  private modalSubscription!: Subscription; 

  constructor(private modalService: ModalService) {
    this.modalSubscription = this.modalService.isModalVisible$.subscribe(isVisible => {
      this.isModalVisible = isVisible;
    });
  }

  OpenModal() {
    this.modalService.ShowModal();
  }

  CloseModal() {
    this.modalService.HideModal();
  }

  ngOnDestroy(): void {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe(); 
    }
  }
}
