import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-passenger-dashboard></app-passenger-dashboard>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}
}
