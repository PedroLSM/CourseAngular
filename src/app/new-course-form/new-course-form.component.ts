import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{

  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopics(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(): FormArray{
    return this.form.get('topics') as FormArray;
  }

}
