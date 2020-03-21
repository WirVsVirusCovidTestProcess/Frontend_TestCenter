import { Component } from '@angular/core';
import { User, BackendService } from '../services/backend.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public people: User[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.people = this.backendService.getUntriagedQueue();
  }
}
