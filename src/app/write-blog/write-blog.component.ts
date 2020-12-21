import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlogService } from 'src/services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {

  title: String;
  description: String;

  constructor(private blogService: BlogService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  postBlog() {
    
    this.blogService.postBlog(this.title, this.description).subscribe((data) => {

      if (data.result) {
        this.snackBar.open('Blog Posted', '', {
          duration: 3000
        })
        this.router.navigate(['/feed'])
      } else {
        this.title = '';
        this.description = '';
        this.snackBar.open('unable to post the blog, Try Again', '', {
          duration: 3000
        })

      }

    })

  }

}
