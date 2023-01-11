import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.css']
})
export class WishMessageComponent implements OnInit {
  public message:string = "Hello";
  constructor() { }

  ngOnInit(): void {
  }
  // public sayGoodMorning():void{
  //   this.message = "Good Morning!"
  // }
  // public sayGoodAfterNoon():void{
  //   this.message = "Good Afternoon!"
  // }
  // public sayGoodEvening():void{
  //   this.message = "Good Evening!"
  // }
  // Now I want to manage the three things in one function
  public updateMessage(msg:string):void {
    this.message = msg;
  }
}
