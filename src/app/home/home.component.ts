import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-home',
template: `
<section class="hero is-info is-fullheight is-bold">
  <div class="hero-body">
    <div class="container">

      <h1 class="title">Welcome to Cyberdyne Solutions. Please register by clicking on "Contact" above.</h1>
      <h1><img src="https://slothbrain.com/wp-content/uploads/2016/02/Cyberdyne-Black.jpg"></h1>

    </div>
  </div>
</section>
`,
styles: [`
.cyber {
background-image: url('/assets/img/Cyberdyne_logo.jpg') !important;
background-size: cover;
background-position: center center;
}
`]
})
export class HomeComponent implements OnInit {
constructor() {}

ngOnInit() {}
}