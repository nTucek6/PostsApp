import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../../interfaces/iposts';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostsService {

  posts: IPost[] = [];
  rxjsPosts = new Subject<IPost[]>();


  constructor(private http: HttpClient)
  {
  }

  loadPosts() {
    let url = "https://jsonplaceholder.typicode.com/posts"
    this.http.get<IPost[]>(url).subscribe((data) => {
      this.posts = data;
      this.rxjsPosts.next(this.posts);
    });
  }


  getPosts(): Observable<IPost[]>  {
    return this.rxjsPosts
  }


}