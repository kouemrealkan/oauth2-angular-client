import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenResponse} from "../models/token.response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token_endpoint = environment.token_url;

  constructor(private http: HttpClient) {
  }

  public getAccessToken(code: string, code_verifier: string): Observable<TokenResponse> {
    let body = new URLSearchParams();
    body.set('grant_type', environment.grant_type);
    body.set('client_id', environment.client_id);
    body.set('redirect_uri', environment.redirect_uri);
    body.set('scope', environment.scope);
    body.set('code_verifier', code_verifier);
    body.set('code', code);
    const basic_auth = 'Basic ' + btoa('public-client-app:secret');
    const headers_object = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Authorization': basic_auth,
    });
    const httpOptions = {headers: headers_object};
    return this.http.post<TokenResponse>(this.token_endpoint, body, httpOptions);
  }
}
