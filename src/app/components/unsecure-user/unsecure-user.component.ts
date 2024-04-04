import {Component, OnInit} from '@angular/core';
import {ResourcesService} from "../../services/resources.service";

@Component({
  selector: 'app-unsecure-user',
  templateUrl: './unsecure-user.component.html',
  styleUrls: ['./unsecure-user.component.css']
})
export class UnsecureUserComponent implements OnInit {
  name = '';

  constructor(private resourceService: ResourcesService) {
  }

  ngOnInit(): void {
    this.resourceService.unsecure().subscribe(data => {
      this.name = data.name;
    });
  }

}
