import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PowerBiService {
  constructor(private http: HttpClient) {}


  public getReportsInGroup(token: string) {
    let groupId = "d903e1d6-59c5-4588-8cca-55e6a06a8462";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }); // this._context is the ADAL AuthenticationContext object
    return this.http.get(
      `https://api.powerbi.com/v1.0/myorg/groups/${groupId}/reports`,
      { headers: headers }
    );
  }
}
