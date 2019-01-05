import { Component } from "@angular/core";
import { CourseService } from "./course.service";


@Component({
    selector: 'courses',
    template: 
    `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>

        <button class="btn btn-primary ">Save</button>
        <br>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})

export class CoursesComponents{
    title = "List of Courses";
    courses;
    email = "me@example.com";

    constructor(service: CourseService){
        this.courses = service.getCourses();
    }

    onKeyUp() {
        console.log(this.email);
    }
}