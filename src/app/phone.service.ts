import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  phoneUrl = `${environment.serviceUrl}/digit`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  sendkeys(digit: string): Observable<void> {
    return this.http.post<void>(this.phoneUrl, { digit }, this.httpOptions);
  }

  sendCallSignal(onCall: boolean): Observable<void> {
    return this.http.post<void>(this.phoneUrl, onCall, this.httpOptions);
  }

  getStatus(): Observable<object> {
    const statusUrl = `${environment.serviceUrl}/status`;
    return this.http.get(statusUrl);
  }
}
