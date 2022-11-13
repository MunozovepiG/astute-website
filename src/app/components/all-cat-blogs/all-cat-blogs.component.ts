import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-all-cat-blogs',
  templateUrl: './all-cat-blogs.component.html',
  styleUrls: ['./all-cat-blogs.component.scss']
})
export class AllCatBlogsComponent implements OnInit {

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
