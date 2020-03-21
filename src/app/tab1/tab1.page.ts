import { Component, OnInit } from '@angular/core';
import { User, BackendService } from '../services/backend.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public people: User[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.people = this.backendService.getUntriagedQueue();
  }
}
