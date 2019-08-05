import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.sass']
})
export class ConsoleComponent {
  @Input() set buttonsPressed(pressed: string) {
    this.buttonPressed = pressed;
    this.splitDigits(pressed);
  }
  get buttonsPressed(): string {
    return this.buttonPressed;
  }

  private buttonPressed: string;
  public cardNumber;
  public CVC: string;

  constructor() {}

  splitDigits(keys: string) {
    this.cardNumber = keys.split('#')[0];
    this.CVC = keys.split('#')[1];
  }

  clearConsole(): void {
    if (this.CVC) {
      this.buttonsPressed = this.buttonsPressed.split('#')[0];
    } else {
      this.buttonsPressed = '';
    }
  }
}
