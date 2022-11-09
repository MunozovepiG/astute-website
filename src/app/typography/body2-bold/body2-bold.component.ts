import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body2-bold',
  templateUrl: './body2-bold.component.html',
  styleUrls: ['./body2-bold.component.scss']
})
export class Body2BoldComponent implements OnInit {

@Input() text:string | undefined
@Input() color:string |undefined

  constructor() { }

  ngOnInit(): void {
  }

}
