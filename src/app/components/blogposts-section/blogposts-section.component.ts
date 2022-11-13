import { Component, Input, OnInit } from '@angular/core';
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
@Input() cat1:string | undefined
@Input() cat2:string | undefined
@Input() cat3:string | undefined
@Input() cat4:string | undefined



  ngOnInit(): void {

    this.blogPosts$ = this.contentfulService.getAllEntries();
  }

}
