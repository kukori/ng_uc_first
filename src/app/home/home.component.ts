import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      Airline passenger app!
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
