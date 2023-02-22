import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any[] = [];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe((response) => {
      this.posts = response as any[];
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.service.createPost(post).subscribe(
      (response: any) => {
        post['id'] = response.id;
        this.posts.splice(0, 0, post);
        console.log(response);
      },
      (error: Response) => {
        if (error.status === 400) {
        } else {
          alert('An unexpected error occured.');
          console.log(error);
        }
      }
    );
  }

  updatePost(post: any) {
    this.service.updatePost(post, { isRead: true }).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post: any) {
    this.service.deletePost(post).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) alert('This post had already been deleted.');
        else {
          alert('An unexpected error occured.');
          console.log(error);
        }
      }
    );
  }
}
