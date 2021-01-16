import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// we do need our post  interface here
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // we need to input our post data
  @Input() post: Post;
  // and we need to output our info to remove a post
  @Output() onDeletePost = new EventEmitter<any>();

  isDeleted: boolean = false;
  // our method to delete a post
  deletePost():void {
    this.isDeleted = true;
    // when run it emits data to our parent
    this.onDeletePost.emit();
  }
  // our method to track upvotes
  upVote(): void {
    this.post.upvote++;
  }
  // and to track downvotes --boo
  downVote():void {
    this.post.downvote++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
