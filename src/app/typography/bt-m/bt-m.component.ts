import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-m',
  templateUrl: './bt-m.component.html',
  styleUrls: ['./bt-m.component.scss']
})
export class BtMComponent implements OnInit {
@Input() color: string | undefined
@Input() text: string |undefined

  constructor() { }

  ngOnInit(): void {
  }

}
