import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-page-link',
  templateUrl: './internal-page-link.component.html',
  styleUrls: ['./internal-page-link.component.scss']
})
export class InternalPageLinkComponent implements OnInit {
@Input() link: string | undefined
@Input() text: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
