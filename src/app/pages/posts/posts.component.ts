import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from './post';
import { PostService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []
  editPost: Post | undefined
  postTitle= ''
  postBody = ''
  constructor(private PostService:PostService) { }

  @ViewChild('postEditInput')
  set postEditInput(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.PostService.getPosts()
      .subscribe(posts => (this.posts = posts));
  }

  add(title: string): void {
    this.editPost = undefined;
    title = title.trim();
    if (!title) {
      return;
    }

    // The server will generate the id for this new post
    const newPost: Post = { title } as Post;
    this.PostService
      .addPost(newPost)
      .subscribe(post => this.posts.push(post));
  }

  delete(post: Post): void {
    this.posts = this.posts.filter(h => h !== post);
    this.PostService
      .deletePost(post.id)
      .subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.PostService.deletePost(post.id);
    */
  }

  edit(postName: string) {
    this.update(postName);
    this.editPost = undefined;
  }

  search(searchTerm: string) {
    this.editPost = undefined;
    if (searchTerm) {
      this.PostService
        .searchPosts(searchTerm)
        .subscribe(posts => (this.posts = posts));
    } else {
      this.getPosts();
    }
  }

  update(postName: string) {
    if (postName && this.editPost && this.editPost.title !== postName) {
      this.PostService
        .updatePost({...this.editPost, title: postName})
        .subscribe(post => {
          // replace the post in the posts list with update from server
          const ix = post ? this.posts.findIndex(h => h.id === post.id) : -1;
          if (ix > -1) {
            this.posts[ix] = post;
          }
        });
      this.editPost = undefined;
    }
  }

}
