import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  blogPosts$ : Observable<any> | undefined
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }

}
