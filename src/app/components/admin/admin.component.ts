import {Component, OnInit} from '@angular/core';
import {ResourcesService} from "../../services/resources.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  name = '';

  constructor(private resourceService: ResourcesService) {
  }

  ngOnInit(): void {
    this.resourceService.admin().subscribe(
      data => {
        this.name = data.name;
      },
      err => {
        console.log(err);
      }
    );
  }
}
