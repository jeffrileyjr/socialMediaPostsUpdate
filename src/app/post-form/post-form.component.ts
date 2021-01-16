import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// we don't need to import our post interface here as it's not needed

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  // we need to output data from our new post form to our parent component so we do that here
  @Output() added = new EventEmitter<any>();

  // we make a method to get the data from our form
  addPost(form) {
    this.added.emit(
      {
        title: form.value.title,
        content: form.value.content,
        upvote: 0,
        downvote: 0
        // up and down vote are 0 since those aren't entered in the form
      }
    );
    // we then reset the form
    form.resetForm();
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
