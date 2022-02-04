import { Component } from '@angular/core';
import { Posts } from './Models/posts.model';
import { PostService } from './Services/PostService/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUDoperation';
  posts:Posts[]=[];

  constructor(private postservice: PostService) { }

  ngOnInit(): void {
    this.getposts();
  }
  getposts(){
    this.postservice.getPosts().subscribe(post => this.posts= post);

  }
}
