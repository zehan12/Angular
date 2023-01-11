import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-app',
  templateUrl: './sms-app.component.html',
  styleUrls: ['./sms-app.component.css']
})
export class SmsAppComponent implements OnInit {
  public message: string = "";
  public maxCharCount:number = 200;
  constructor() { }

  ngOnInit(): void {
  }

}
