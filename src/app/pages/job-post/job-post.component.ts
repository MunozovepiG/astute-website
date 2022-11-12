import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss']
})
export class JobPostComponent implements OnInit {

  constructor(private route: ActivatedRoute,private contentfulService: ContentfulService) { }

  blogPost$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id']
this.blogPost$ = this.contentfulService.getEntryById(id)

      }
    )
  }

}
