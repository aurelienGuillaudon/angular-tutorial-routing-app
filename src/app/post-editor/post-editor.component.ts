import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })
  onSubmit() {

  }
  constructor() { }

  ngOnInit(): void {
  }

}
