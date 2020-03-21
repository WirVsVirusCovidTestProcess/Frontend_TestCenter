import { Component, OnInit } from '@angular/core';
import { User, BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-result-queue',
  templateUrl: './result-queue.page.html',
  styleUrls: ['./result-queue.page.scss']
})
export class ResultQueuePage implements OnInit {
  public people: User[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.people = this.backendService.getUntriagedQueue();
  }
}
