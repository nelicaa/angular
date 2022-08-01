import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations:[
    
    trigger('animacija', [
      transition('void=>*', [
        style({transform:"translateX(-1024px)"}),
        animate('0.5s 1s ease-in')
      ])
    ])
]
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
