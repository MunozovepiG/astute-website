import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-blogposts-section',
  templateUrl: './blogposts-section.component.html',
  styleUrls: ['./blogposts-section.component.scss']
})
export class BlogpostsSectionComponent implements OnInit {

  constructor( private contentfulService:ContentfulService) { }

blogPosts$ : Observable<any> | undefined

  ngOnInit(): void {

    this.blogPosts$ = this.contentfulService.getAllEntries();
  }

}
