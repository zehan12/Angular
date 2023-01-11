import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AuthCardComponent } from './component/auth-card/auth-card.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ProductComponent } from './component/product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthCardComponent,
    ShoppingCartComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
