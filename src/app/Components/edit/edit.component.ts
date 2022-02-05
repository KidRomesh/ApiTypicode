import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Posts } from 'src/app/Models/posts.model';
import { PostService } from 'src/app/Services/PostService/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Post:Posts|undefined;
  

  constructor(private location: Location,private route : ActivatedRoute,private postService:PostService){
  }

  ngOnInit(): void {

    this.getpost();
}
  getpost(){
    const id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.postService.getPost(id).subscribe(post=>this.Post=post);
    console.log(id);
  }


  goBack(){
    this.location.back();
  }

  submit():void{
    if(this.Post){
      console.log(this.Post);
      this.postService.update(this.Post)
      .subscribe(()=> this.goBack());
    }

    
  }

}
