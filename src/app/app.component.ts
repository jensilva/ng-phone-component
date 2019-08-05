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
    this.phoneService.getStatus().subscribe();
    this.phoneService.sendCallSignal(this.onCall).subscribe();
  }

  getKeys(key: string): string {
    this.buttonsPressed += key;
    this.sendKeys();
    return this.buttonsPressed;
  }

  sendKeys(): void {
    this.phoneService.sendkeys(this.buttonsPressed).subscribe();
  }

  call(): void {
    this.onCall = !this.onCall;
    this.callSignal();
    this.buttonsPressed = '';
  }

  callSignal(): void {
    this.phoneService.sendCallSignal(this.onCall).subscribe();
  }

  get buttonMessage(): string {
    if (this.onCall) {
      return 'Dismiss Call';
    } else {
      return 'Call';
    }
  }
}
