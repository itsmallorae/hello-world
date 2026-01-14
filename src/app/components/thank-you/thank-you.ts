import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  imports: [],
  templateUrl: './thank-you.html',
  styleUrl: './thank-you.scss',
})
export class ThankYou {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
