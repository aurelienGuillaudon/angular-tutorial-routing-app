import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    /*title: 'Home',*/
    component: HomeComponent,
    children: [
      { path: 'posts', /*title: 'Posts',*/ component: PostsComponent },
      /*{ path: 'comments', /!*title: 'Comments',*!/ component: CommentsComponent },
      { path: 'albums', /!*title: 'Albums',*!/ component: AlbumsComponent },
      { path: 'photos', /!*title: 'Photos',*!/ component: PhotosComponent },
      { path: 'todos', /!*title: 'Todos',*!/ component: TodosComponent },
      { path: 'users', /!*title: 'Users',*!/ component: UsersComponent },*/
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
