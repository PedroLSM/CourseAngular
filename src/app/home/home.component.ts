import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  tweet = {
    body: 'this is a body',
    isLiked: false,
    likesCount: 0
  }

  constructor() { }

  ngOnInit() {
  }

}
