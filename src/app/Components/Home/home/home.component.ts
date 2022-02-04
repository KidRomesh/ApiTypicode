import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/Models/posts.model';
import { PostService } from 'src/app/Services/PostService/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:Posts[]=[];

  constructor(private postservice: PostService) { }

  ngOnInit(): void {
    this.getposts();
  }
  getposts(){
    this.postservice.getPosts()
    .subscribe(post => this.posts= post);

  }

}
