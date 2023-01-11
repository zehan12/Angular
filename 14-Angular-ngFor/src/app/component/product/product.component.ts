import { Component, Input, OnInit } from '@angular/core';
interface Product {
  sno:string;
  name:string;
  image:string;
  qty:number;
  price:number;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product : Product | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
