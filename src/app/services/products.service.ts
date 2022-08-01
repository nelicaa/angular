import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{paths} from "./paths";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private service:HttpClient) { }

  getProducts(){
    let products=this.service.get(paths.products);
    return products;
  }
}
