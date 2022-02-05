import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Posts } from 'src/app/Models/posts.model';
import { PostService } from 'src/app/Services/PostService/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:Posts[]=[];
  pos:NavigationExtras[]=[];

  constructor(private postservice: PostService , private router: Router) { }

  ngOnInit(): void {
    this.getposts();
  }
  getposts(){
    this.postservice.getPosts().subscribe(post => this.posts= post);

  }

}