import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../services/models/products';
import { CategoryService } from './../services/category.service';
import { Category } from './../services/models/category';
import { animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations:[
    
    trigger('product', [
      transition('void=>*', [
        style({opacity:0}),
        animate('0.1s 0.1s')
      ])
    ])
]

})





export class ProductsComponent implements OnInit {

  constructor(private ProductsService : ProductsService, private categoryService: CategoryService) { }

  
  public kat:number=1;
  klik=true;
  public productKat: Products[]=[];
  public products:Products[] = [];
  public category:Category[] = [];
  public niz:Products[] = [];

  ngOnInit(): void {
    this.categoryService.getAllKat().subscribe(
      (data : any )=> {
        this.category = data;
      }
    )
  
this.Allproducts();

  
  }

  ShowProducts(id: number){
    this.kat=id 
    this.klik=true
    this.Allproducts();
  }

  Allproducts(){
    this.ProductsService.getProducts().subscribe(
      (data : any )=> {
        this.products = data;
        this.products.filter(x=>{if(x.kat===this.kat){this.niz.push(x)}})
        this.productKat=this.niz;
        this.niz=[];
        
    }
    )}
}
