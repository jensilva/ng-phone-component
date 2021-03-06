import { Component, OnInit } from '@angular/core';
import { PhoneService } from './phone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Phone';
  buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
  onCall = false;
  buttonsPressed = '';

  constructor(private phoneService: PhoneService) {}

  ngOnInit() {
    this.phoneService.sendCallSignal(this.onCall).subscribe();
  }

  getKeys(key: string): string {
    this.buttonsPressed += key;
    this.sendKeys(key);
    return this.buttonsPressed;
  }

  backspace() {
    if (this.buttonsPressed) {
      const newDigits = this.buttonsPressed.split('');
      this.buttonsPressed = newDigits.slice(0, -1).join('');
    }
  }

  get buttonMessage(): string {
    if (this.onCall) {
      return 'Dismiss Call';
    } else {
      return 'Call';
    }
  }

  sendKeys(key: string): void {
    this.phoneService.sendkeys(key).subscribe();
  }

  call(): void {
    this.onCall = !this.onCall;
    this.callSignal();
    this.buttonsPressed = '';
  }

  callSignal(): void {
    this.phoneService.sendCallSignal(this.onCall).subscribe();
  }

  onResetEvent(keys: string) {
    this.buttonsPressed = keys;
  }
}
