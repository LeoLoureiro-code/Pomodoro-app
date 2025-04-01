import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  @Input() isVisible: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  onClose(){
    this.isVisible = false;
    this.closeModal.emit();
  }
}
