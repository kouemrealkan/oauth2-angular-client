import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {environment} from "../../environments/environment";

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const CODE_VERIFIER = 'code_verifier';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  setTokens(access_token: string, refresh_token: string): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.setItem(ACCESS_TOKEN, access_token);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.setItem(REFRESH_TOKEN, refresh_token);
  }

  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  clearAllTokens() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(ACCESS_TOKEN) != null;
  }

  isAdmin(): boolean {
    if (!this.isLoggedIn()) {
      return false;
    }
    const token = this.getAccessToken();
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    const values = JSON.parse(decodedPayload);
    const authorities = values.authorities;
    return authorities.indexOf("MNG_SYSTEM") >= 0;
  }

  setVerifier(code_verifier: string) {
    if (localStorage.getItem(CODE_VERIFIER)) {
      this.removeVerifier();
    }
    const encrypted = CryptoJS.AES.encrypt(code_verifier, environment.secret_pkce);
    localStorage.setItem(CODE_VERIFIER, encrypted.toString());
  }

  getVerifier(): string {
    const encrypted = localStorage.getItem(CODE_VERIFIER);
    const decrypted = CryptoJS.AES.decrypt(encrypted, environment.secret_pkce).toString(CryptoJS.enc.Utf8)
    return decrypted;
  }

  removeVerifier() {
    localStorage.removeItem(CODE_VERIFIER);
  }
}
