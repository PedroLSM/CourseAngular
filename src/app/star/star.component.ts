import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  template:
  `
    <span [class] = "star" (click) = "onClickStar()"></span>
  `
})

export class StarComponent{
    @Input() isSelected: boolean;
    star = !this.isSelected ? "glyphicon glyphicon-star-empty" : "glyphicon glyphicon-star";

    onClickStar(){
      let starFull = "glyphicon glyphicon-star";
      let starEmpty = "glyphicon glyphicon-star-empty";

      this.star = (this.isSelected === false) ? starEmpty : starFull
      this.isSelected = !this.isSelected;
    }
}
