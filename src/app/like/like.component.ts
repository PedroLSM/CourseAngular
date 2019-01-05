import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent{
  @Input() isLiked: boolean;
  @Input() likesCount = 0;
  
  ColorLike(){
    return this.isLiked ? "deeppink" : "#ccc"
  }

  onChangedLike(){
    this.isLiked = !this.isLiked;
    this.likesCount = this.isLiked ? ++this.likesCount : --this.likesCount;
  }
}
