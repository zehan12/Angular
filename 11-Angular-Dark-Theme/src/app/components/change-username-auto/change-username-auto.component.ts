import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-username-auto',
  templateUrl: './change-username-auto.component.html',
  styleUrls: ['./change-username-auto.component.css']
})
export class ChangeUsernameAutoComponent implements OnInit {
  public username:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
