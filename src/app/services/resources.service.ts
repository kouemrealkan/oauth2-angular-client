import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  resourceEndpoint = environment.resource_server_url;

  constructor(private http: HttpClient) {
  }

  public user(): Observable<any> {
    return this.http.get<any>(this.resourceEndpoint + 'user');
  }

  public admin(): Observable<any> {
    return this.http.get<any>(this.resourceEndpoint + 'admin');
  }

  public unsecure(): Observable<any> {
    return this.http.get<any>(this.resourceEndpoint + 'unsecure')
  }
}
