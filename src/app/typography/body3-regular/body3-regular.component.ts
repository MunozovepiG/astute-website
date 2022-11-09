import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body3-regular',
  templateUrl: './body3-regular.component.html',
  styleUrls: ['./body3-regular.component.scss']
})
export class Body3RegularComponent implements OnInit {
@Input() text:string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
