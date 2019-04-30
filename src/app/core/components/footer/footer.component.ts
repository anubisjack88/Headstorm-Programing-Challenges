import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
      <p>
        A website creative and develped by  by <a href="https://www.linkedin.com/in/gemar-johnston/">Gemar Johnston (Johnston Executive Solutions)</a>
      </p>
    </div>
    </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}