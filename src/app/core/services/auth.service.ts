import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TokenObj } from '../models/token';
import { BASE_URL } from '../config/service.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/token';

  constructor(private http: HttpClient,
    @Inject(BASE_URL) private baseUrl) {

  }

  loginWithCredentials(username: string, password: string): Observable<TokenObj> {
    const url = this.baseUrl + this.apiUrl;
    return this.http.post<TokenObj>(url, { 'username': username, 'password': password });
  }
}
