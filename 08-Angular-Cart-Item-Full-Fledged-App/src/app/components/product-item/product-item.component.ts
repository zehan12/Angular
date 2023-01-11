import { Component, OnInit } from '@angular/core';

interface Product{
  sno:string;
  name:string;
  image:string;
  qty:number;
  price:number;
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public product:Product = {
    sno:"AA101",
    name:"MI Watch",
    image:"https://www.reliancedigital.in/medias/realme-RMA161-Smart-Watches-491946586-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODQ4NnxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaDQzLzk0NzE1Njg4Mzg2ODYuanBnfGQ1NjkzM2ZhZWNkM2QxMzAzYTcwZjFiNWZhMTZiMzFmOTBkMWJkNWZlY2EzMGIxM2IzMTMxMTUzZjEwMzRkZmM",
    qty:2,
    price:1500
  };
  constructor() { }

  ngOnInit(): void {
  }

  public incrementQty():void{
    this.product = {
      ...this.product,qty:this.product.qty+1
    }
  }
}
