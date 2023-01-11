import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  constructor() { }
  @Input() selectedContact : Contact = {} as Contact;

  ngOnInit(): void {
  }
  public isNotEmpty(){
    return Object.keys(this.selectedContact).length > 0
  }
}
