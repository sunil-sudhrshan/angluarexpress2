import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  private baseUrl = 'http://localhost:9901';

  constructor(private http: HttpClient) {}

  addContact(formData: NgForm): Observable<any> {
    return this.http.post(`${this.baseUrl}/insertContact`, formData.value);
  }

  getAllContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllContact`);
  }

  updateContact(formData: NgForm): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateContact`, formData.value);
  }

  deleteContact(formData: NgForm): Observable<any> {
    return this.http.post(`${this.baseUrl}/deleteContact`, formData.value);
  }

  searchContactByID(contactId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getContactByID?contactid=${contactId}`);
  }
}
