import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ovning9';

  birthday: Date = new Date(1990, 8, 24)

  fullName: string = 'Joel Hägg'
  
}
