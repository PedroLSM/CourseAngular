import { Component, OnInit } from '@angular/core';
import { FollowService } from '../services/follow.service';

@Component({
  selector: 'followers',
  templateUrl: './followeer.component.html',
  styleUrls: ['./followeer.component.css']
})
export class FolloweerComponent implements OnInit {

  followeers: any[];

  constructor(private service: FollowService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followeers => this.followeers = followeers);
  }

}
