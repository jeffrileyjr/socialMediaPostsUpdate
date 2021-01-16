import { Component, OnInit } from '@angular/core';
// first thing I do, is import my interface
import { Post } from '../models/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  // We declare a post variable of type Post[] and fill it with a few posts
  posts: Post[] = [
    {
      title: 'Muppets',
      content: 'Gonzo, Fozzy, and Rowlf are the best Muppets.',
      upvote: 0,
      downvote: 0,
    },
    {
      title: 'Fozzy',
      content: 'Fozzy loves to tell a good joke.',
      upvote: 0,
      downvote: 0,
    },
    {
      title: 'Gonzo',
      content: 'For some reason, loves chickens.',
      upvote: 0,
      downvote: 0,
    }
  ];
  // we set a variable to track if the new thought button is clicked or not
  isClicked: boolean = false;

  // we make a method to add a new post and add it to the start of the array with unshift and set isClicked back to false to hide the form
  onAddPost(post: Post): void {
    this.posts.unshift(post);
    this.isClicked = false;
  }

  // we declare a method for removing a post based on the index of it
  deletePost(index: number): void {
     this.posts.splice(index, 1);
  }

  // finally we set a method to toggle the form when the new thought button is clicked
  toggleForm(): void {
    this.isClicked = !this.isClicked;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
