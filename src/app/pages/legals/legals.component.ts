import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';


@Component({
  selector: 'app-legals',
  templateUrl: './legals.component.html',
  styleUrls: ['./legals.component.scss']
})
export class LegalsComponent implements OnInit {

  constructor(private contentfulService:ContentfulService) { }

  blogPosts$ : Observable<any> | undefined

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }

}
