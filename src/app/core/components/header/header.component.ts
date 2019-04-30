import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-header',
template: `
<nav class="navbar is-dark">

  <!-- logo -->
  <div class="navbar-brand">
    <a class="navbar-item">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_SH7K_1MDPEWlXVHbHxHa9UpZ_-f91C4HsYInZdWl2QnvGX9">
    </a>
  </div>

  <!-- menu -->
  <div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" routerLink="">Home</a>
      <a class="navbar-item" routerLink="contact">Contact</a>

    </div>
  </div>
</nav>
`,
styles: []
})
export class HeaderComponent implements OnInit {
constructor() {}
ngOnInit() {}
}