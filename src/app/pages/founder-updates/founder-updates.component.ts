import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-founder-updates',
  templateUrl: './founder-updates.component.html',
  styleUrls: ['./founder-updates.component.scss']
})
export class FounderUpdatesComponent implements OnInit {

  blogPosts$ : Observable<any> | undefined

  constructor(private contentfulService:ContentfulService) { }

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }

}
