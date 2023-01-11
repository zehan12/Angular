import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ChangeUsernameComponent } from './components/change-username/change-username.component';
import { ChangeUsernameAutoComponent } from './components/change-username-auto/change-username-auto.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { AmountRangeComponent } from './components/amount-range/amount-range.component'
@NgModule({
  declarations: [
    AppComponent,
    ChangeUsernameComponent,
    ChangeUsernameAutoComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
