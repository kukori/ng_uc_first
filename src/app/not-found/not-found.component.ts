import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div>404, <a routerLink="/">go home</a>?</div>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
