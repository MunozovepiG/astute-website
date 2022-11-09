import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body1-regular',
  templateUrl: './body1-regular.component.html',
  styleUrls: ['./body1-regular.component.scss']
})
export class Body1RegularComponent implements OnInit {


  @Input() text:any | undefined
  @Input() color:any | undefined
  
  constructor() { }

  ngOnInit(): void {
  }

}
