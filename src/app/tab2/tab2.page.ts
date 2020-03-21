import { Component } from '@angular/core';
import { User, BackendService } from '../services/backend.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public people: User[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.people = this.backendService.getUntriagedQueue();
  }
}
