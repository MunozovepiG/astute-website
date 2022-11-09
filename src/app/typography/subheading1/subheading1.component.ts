import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subheading1',
  templateUrl: './subheading1.component.html',
  styleUrls: ['./subheading1.component.scss']
})
export class Subheading1Component implements OnInit {

  @Input() text:any | undefined
  @Input() color:any | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
