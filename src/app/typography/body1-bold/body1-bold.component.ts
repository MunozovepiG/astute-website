import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body1-bold',
  templateUrl: './body1-bold.component.html',
  styleUrls: ['./body1-bold.component.scss']
})
export class Body1BoldComponent implements OnInit {
@Input() text:string | undefined
@Input() color:string | undefined


  constructor() { }

  ngOnInit(): void {
  }

}
