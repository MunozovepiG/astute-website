import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fund-raising',
  templateUrl: './fund-raising.component.html',
  styleUrls: ['./fund-raising.component.scss']
})
export class FundRaisingComponent implements OnInit {

  constructor(private contentfulService:ContentfulService) { }

  blogPosts$ : Observable<any> | undefined

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }

}
