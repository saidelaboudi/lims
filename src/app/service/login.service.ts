import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

const API = 'http://localhost:11111/auth/realms/master/protocol/openid-connect/token';
const options = {
  headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(form: any): Observable<any> {
    let body = new URLSearchParams();
    body.set('username', form.username);
    body.set('password', form.password);
    body.set('client_id', 'front');
    body.set('grant_type', "password");

    console.log("from services", body)
    // this.http.post(API, body, options).subscribe(data => console.log(data), err => console.log(err))

    return this.http.post(API, body, options)
  }

  public decodeToken(myRawToken: string | null): any {
    if (myRawToken) {
      const decodedToken = this.helper.decodeToken(myRawToken);
      return decodedToken
    }
    return null
  }

}
