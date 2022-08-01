import { CategoryService } from './../services/category.service';
import { Category } from './../services/models/category';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kat',
  templateUrl: './kat.component.html',
  styleUrls: ['./kat.component.css']
})
export class KatComponent implements OnInit {
  public kat:number=1;

  constructor(private categoryService : CategoryService) { }
  public category:Category[] = [];
  ngOnInit() {
    
    this.categoryService.getAllKat().subscribe(
      (data : any )=> {
        this.category = data;
      },
      error => {
        alert("An error has occured. Please contact support team. Error: " + error)
      }
    )
  }
  showProduct(id: number){
    this.kat=id 
    // console.log(this.kat)

  }
  
}