import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: any, args: { isRead?: boolean }) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(args));
  }

  deletePost(post: any) {
    return this.http.delete(this.url + '/' + post.id);
  }
}
