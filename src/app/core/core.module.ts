import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RouterModule
} from '@angular/router';

import {
  HeaderComponent
} from './components/header/header.component';
import {
  FooterComponent
} from './components/footer/footer.component';
// import { UserService } from './services/user.service';
import {
  DigitOnlyModule
} from '@uiowa/digit-only';
import {
  BrowserModule
} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    DigitOnlyModule
  ],
  providers: [
    // UserService
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule {}