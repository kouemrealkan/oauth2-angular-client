import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, of, throwError} from 'rxjs';
import {TokenService} from "../services/token.service";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class ResourceInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private alertService: ToastrService) {
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      //navigate /delete cookies or whatever
      this.alertService.error('Bu sayfaya erişim yetkiniz yok!')
      return of(err.message);
    }
    return throwError(err);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let interRequest = request;
    const token = this.tokenService.getAccessToken();
    if (token != null && request.url.includes('resource')) {
      interRequest = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }
    return next.handle(interRequest)
      .pipe(catchError(e => this.handleAuthError(e)));
  }
}
