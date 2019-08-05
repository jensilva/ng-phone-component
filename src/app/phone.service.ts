import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  sendkeys(digits: string): Observable<void> {
    const phoneUrl = `${environment.serviceUrl}/digit`;
    return this.http.post<void>(phoneUrl, { digits }, this.httpOptions);
  }

  sendCallSignal(onCall: boolean): Observable<void> {
    const changeCallStatusUrl = `${environment.serviceUrl}/call`;
    return this.http.post<void>(
      changeCallStatusUrl,
      { onCall },
      this.httpOptions
    );
  }
}
