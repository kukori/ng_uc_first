import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <nav class="nav">
        <!-- <a 
          routerLink="/" 
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >Home</a> -->
        <a *ngFor="let item of nav"
          [routerLink]="item.link" 
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }"
        >{{item.name}}</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ]

  constructor() {}
}
