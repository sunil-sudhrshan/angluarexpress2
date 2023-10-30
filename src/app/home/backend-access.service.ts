import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable ,map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  private baseUrl = 'http://localhost:9901';

  constructor(private http: HttpClient) {}

  addUser(formData: NgForm): Observable<any> {
    return this.http.post(`${this.baseUrl}/insert`, formData.value);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`)
      .pipe(
        map((users: any[]) => users.filter((user: string) => user !== '' && user !== ''))
      );
  }

  updateUser(formData: NgForm): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, formData.value);
  }

  deleteUser(formData: NgForm): Observable<any> {
    return this.http.post(`${this.baseUrl}/delete`, formData.value);
  }

  searchUser(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getById?uid=${userId}`);
  }
}
