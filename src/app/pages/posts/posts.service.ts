import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

/*import { Post } from './post';*/

import { Post } from './post';
import { HandleError, HttpErrorHandler } from '../../http-error-handler.service';

const baseUrl: string = 'https://jsonplaceholder.typicode.com'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    /*Authorization: 'my-auth-token'*/
  })
};

@Injectable()
export class PostService {
  postsUrl = baseUrl + '/posts';  // URL to web api
  private readonly handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('PostService');
  }

  /** GET posts from the server */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        catchError(this.handleError('getPosts', []))
      );
  }

  /* GET posts whose name contains search term */
  searchPosts(term: string): Observable<Post[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
      { params: new HttpParams().set('title', term) } : {};

    return this.http.get<Post[]>(this.postsUrl, options)
      .pipe(
        catchError(this.handleError<Post[]>('searchPosts', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new post to the database */
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions)
      .pipe(
        catchError(this.handleError('addPost', post))
      );
  }

  /** DELETE: delete the post from the server */
  deletePost(id: number): Observable<unknown> {
    const url = `${this.postsUrl}/${id}`; // DELETE api/posts/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deletePost'))
      );
  }

  /** PUT: update the post on the server. Returns the updated post upon success. */
  updatePost(post: Post): Observable<Post> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Post>(`${this.postsUrl}/${post.id}`, post, httpOptions)
      .pipe(
        catchError(this.handleError('updatePost', post))
      );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/