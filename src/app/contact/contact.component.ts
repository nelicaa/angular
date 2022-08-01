import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  forma:FormGroup | undefined;

  constructor() { }

  ngOnInit(): void {
    this.forma = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('^[A-ZŠĐČĆŽ][a-zšđčćž]{3,12}\\s[A-ZŠĐČĆŽ][a-zšđčćž]{3,20}$')]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      cv : new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    })
  }
  FormSubmit(){
    if(this.forma != undefined){
      this.forma.reset();    
    }
  }
}
