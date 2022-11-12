import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-h2',
  templateUrl: './h2.component.html',
  styleUrls: ['./h2.component.scss']
})
export class H2Component implements OnInit {
@Input() text:string | undefined

  constructor(){ }

  ngOnInit(): void {
  }

}
