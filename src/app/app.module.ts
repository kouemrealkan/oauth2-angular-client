import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {AuthorizedComponent} from './components/authorized/authorized.component';
import {HomeComponent} from './components/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ResourceInterceptor} from "./interceptors/resource.interceptor";
import {UserComponent} from './components/user/user.component';
import {AdminComponent} from './components/admin/admin.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { LogoutComponent } from './components/logout/logout.component';
import { UnsecureUserComponent } from './components/unsecure-user/unsecure-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AuthorizedComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    LogoutComponent,
    UnsecureUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ResourceInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
