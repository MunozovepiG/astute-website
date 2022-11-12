import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-button-default',
  templateUrl: './round-button-default.component.html',
  styleUrls: ['./round-button-default.component.scss']
})
export class RoundButtonDefaultComponent implements OnInit {
  @Input() color:string | undefined
  @Input() text:string | undefined

  

  constructor() { }

  ngOnInit(): void {
  }

}
