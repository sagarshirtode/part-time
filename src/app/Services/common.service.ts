import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private httpClient: HttpClient) {}
  read(url: String): Observable<any> {
    return this.httpClient.get(`${environment.baseURL}${url}`);
  }
  getUserData(): Observable<any> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/1`);
  }
}
