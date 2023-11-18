import { Component, OnInit  } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

  
})
export class PostsComponent implements OnInit {
  title = 'Posts';

  constructor (private postsService:PostsService)
  {
    this.postsService.loadPosts();
  }

  posts : any[] = [];

  ngOnInit(){
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data
    });

  }

}
