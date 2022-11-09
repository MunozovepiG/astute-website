import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body2-regular',
  templateUrl: './body2-regular.component.html',
  styleUrls: ['./body2-regular.component.scss']
})
export class Body2RegularComponent implements OnInit {

  @Input() text:any | undefined
  @Input() color:any | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
