import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuComponent} from "./components/menu/menu.component";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'oauth2-client-side';
  @ViewChild('menu') menu: MenuComponent;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.router.events.pipe(filter((event: RouterEvent) => event instanceof NavigationEnd)).subscribe(() => {
      this.menu.getLoggedInInfo();
    })
  }
}
