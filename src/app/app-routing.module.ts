import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts-page/posts.component';
import { NewPostComponent } from './pages/new-post-page/new-post.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'newpost', component: NewPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
