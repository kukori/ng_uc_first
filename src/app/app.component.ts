import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-passenger-viewer></app-passenger-viewer>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}
}
