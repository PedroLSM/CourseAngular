import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FollowService extends DataService{

  constructor(http: Http) {
    super("https://api.github.com/users/PedroLSM/followers", http);
  }
}
