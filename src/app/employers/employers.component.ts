import { EmployersService } from './../services/employers.service';
import { Employers } from './../services/models/employers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  constructor(private employersService : EmployersService) { }
  public employers:Employers[] = [];

  ngOnInit(): void {
    this.employersService.getAllEmployers().subscribe(
      (data : any )=> {
        this.employers = data;
      }
    )
  }

}
