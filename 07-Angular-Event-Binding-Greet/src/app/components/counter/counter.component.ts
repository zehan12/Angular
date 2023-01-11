import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public count:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  public incrCount():void{
    this.count = this.count+1;
  }
  public decrCount():void{
    this.count = this.count-1 > 0 ? this.count-1 : 0;
  }
}
