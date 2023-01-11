import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css']
})
export class AuthCardComponent implements OnInit {
  public isLoggedIn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  public login():void{
    this.isLoggedIn = true;
  }
  public logout():void{
    this.isLoggedIn = false;
  }
}

