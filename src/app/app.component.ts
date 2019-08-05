import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Phone';
  buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
  onCall = false;
  buttonsPressed = '';

  getKeys(key: string): string {
    this.buttonsPressed += key;
    return this.buttonsPressed;
  }

  call(): void {
    this.onCall = !this.onCall;
    this.buttonsPressed = '';
    console.log(this.onCall);
  }

  get buttonMessage(): string {
    if (this.onCall) {
      return 'Dismiss Call';
    } else {
      return 'Call';
    }
  }
}
