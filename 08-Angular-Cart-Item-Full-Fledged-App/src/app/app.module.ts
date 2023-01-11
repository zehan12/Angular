import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShopingCardComponent } from './components/shoping-card/shoping-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ShopingCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
