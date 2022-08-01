import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{paths} from "./paths";


@Injectable({
  providedIn: 'root'
})
export class EmployersService {

  constructor(private service:HttpClient) { }
  getAllEmployers(){
    let employers=this.service.get(paths.employers);
    return employers;
  }
}
