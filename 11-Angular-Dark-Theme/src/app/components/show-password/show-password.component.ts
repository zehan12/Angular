import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit {
  constructor() { }
  public type: string = 'password';
  ngOnInit(): void {
  }
  public showPassword(event: any): void {
    // if(event.target.checked){
    //   this.type = "text";
    // }
    // else{
    //   this.type = "password";
    // }
    event.target.checked ? this.type = "text" : this.type = "password";
  }
}
