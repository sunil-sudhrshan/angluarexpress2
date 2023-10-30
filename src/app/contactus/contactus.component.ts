import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackendAccessService } from './backend-access.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  contactList: any = [];
  expresponse: string = "";
  showResult: boolean = false;

  constructor(private backendService: BackendAccessService) {}

  addContact(form: NgForm): void {
    this.backendService.addContact(form).subscribe(response => {
      this.expresponse = response.toString();
      this.getAllContacts();
    });
    this.clear(form);
  }

  getAllContacts(): void {
    this.backendService.getAllContacts().subscribe(contacts => {
      this.contactList = contacts;
      this.showResult = true;
    });
  }

  updateContact(form: NgForm): void {
    this.backendService.updateContact(form).subscribe(response => {
      this.expresponse = response.toString();
      this.getAllContacts();
    });
    this.clear(form);
  }

  deleteContact(form: NgForm): void {
    this.backendService.deleteContact(form).subscribe(response => {
      this.expresponse = response.toString();
      this.getAllContacts();
    });
    this.clear(form);
  }

  searchContact(form: NgForm): void {
    const contactId = form.value.contactid;
    this.backendService.searchContactByID(contactId).subscribe(contact => {
      this.contactList = contact;
      this.showResult = true;
    });
  }

  clear(form: NgForm){
    form.reset();
  }
}
