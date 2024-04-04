import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizedComponent} from "./components/authorized/authorized.component";
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {AdminComponent} from "./components/admin/admin.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {UnsecureUserComponent} from "./components/unsecure-user/unsecure-user.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'authorized', component: AuthorizedComponent},
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'unsecure', component: UnsecureUserComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
