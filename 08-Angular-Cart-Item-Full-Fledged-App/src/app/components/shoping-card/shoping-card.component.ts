import { Component, OnInit } from '@angular/core';
interface Product{
  sno:string;
  name:string;
  image:string;
  qty:number;
  price:number;
}
@Component({
  selector: 'app-shoping-card',
  templateUrl: './shoping-card.component.html',
  styleUrls: ['./shoping-card.component.css']
})
export class ShopingCardComponent implements OnInit {
  public products:Product[] = [
    {
      sno:"AA101",
      name:"Mi Watch",
      image:"https://www.tradeinn.com/f/13824/138249195/xiaomi-mi-watch.jpg",
      price:1500,
      qty:2
    },
    {
      sno:"AA102",
      name:"Apple Watch",
      image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML763_VW_34FR+watch-45-stainless-gold-cell-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630042305000%2C1631661863000",
      price:3500,
      qty:4
    },
    {
      sno:"AA103",
      name:"Redmi Watch",
      image:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1631526187.77317185.png",
      price:1800,
      qty:8
    },
    {
      sno:"AA104",
      name:"OPPO Watch",
      image:"https://i02.appmifile.com/688_operator_sg/21/10/2021/cc1f857c7baf470fa6d421f0733176a5.png",
      price:1900,
      qty:8
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  public incrementQty(productId:string):void{
    this.products = this.products.map((product:Product) =>{
      if(product.sno === productId){
        return {
          ...product,
          qty:product.qty+1
        }
      }
      return product;
    })
  }
  public decrementQty(productId:String):void{
    this.products = this.products.map((product:Product) =>{
      if(product.sno === productId){
        return {
          ...product,
          qty:product.qty-1 > 1 ? product.qty-1:1
        }
      }
      return product;
    })
  }
  public calcGrandTotal():number{
    let total:number = 0;
    for(let product of this.products){
      total += (product.qty*product.price)
    }
    return total;
  }
}
