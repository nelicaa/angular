import { Component, OnInit } from '@angular/core';
import { Menu } from './../services/models/menu';
import { MenuService } from './../services/menu.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService : MenuService) { }
  public menu:Menu[] = [];
  ngOnInit() {
    
    this.menuService.getAllMenues().subscribe(
      (data : any )=> {
        this.menu = data;
      }
    )
  }

}
