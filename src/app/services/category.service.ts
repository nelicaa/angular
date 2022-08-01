import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{paths} from "./paths";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private service:HttpClient) { }
  getAllKat(){
    let kat=this.service.get(paths.category);
    return kat;
  }
}
