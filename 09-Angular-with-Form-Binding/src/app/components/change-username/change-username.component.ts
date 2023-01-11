import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.css']
})
export class ChangeUsernameComponent implements OnInit {
  public username: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  // two way data binding but manually
  public updateInput(event:any):void{
    this.username = event.target.value;
  }
  // everything does automatic by ng-model
}
