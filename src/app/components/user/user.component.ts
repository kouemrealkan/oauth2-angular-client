import {Component, OnInit} from '@angular/core';
import {ResourcesService} from "../../services/resources.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = '';
  imageUrl = '';

  constructor(private resourceService: ResourcesService) {
  }

  ngOnInit(): void {
    this.resourceService.user().subscribe(
      data => {
        this.name = data.name;
        this.imageUrl = data.imageUrl;
      },
      (error: HttpErrorResponse) => {
      }
    );
  }

}
