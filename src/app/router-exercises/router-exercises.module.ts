import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { GithubProfileComponent } from '../github-profile/github-profile.component';
import { FolloweerComponent } from '../followeer/followeer.component';
import { PostsComponent } from '../posts/posts.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ZippyComponent } from '../zippy/zippy.component';
import { TitleCaseComponent } from '../title-case/title-case.component';
import { StarComponent } from '../star/star.component';
import { LikeComponent } from '../like/like.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NewCourseFormComponent } from '../new-course-form/new-course-form.component';
import { CourseFormComponent } from '../course-form/course-form.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'followers/:id',
    component: GithubProfileComponent 
  },
  {
    path: 'followers',
    component: FolloweerComponent 
  },
  {
    path: 'posts',
    component: PostsComponent 
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent 
  },
  {
    path: 'contact-form',
    component: ContactFormComponent 
  },
  {
    path: 'course-form',
    component: CourseFormComponent 
  },
  {
    path: 'new-course-form',
    component: NewCourseFormComponent 
  },
  {
    path: 'signup-form',
    component: SignupFormComponent 
  },
  {
    path: 'star',
    component: StarComponent 
  },
  {
    path: 'title-case',
    component: TitleCaseComponent 
  },
  {
    path: '**',
    component: NotFoundComponent 
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RouterExercisesModule { }
