import { Component, OnInit } from '@angular/core';
import { User, BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-waiting-queue',
  templateUrl: './waiting-queue.page.html',
  styleUrls: ['./waiting-queue.page.scss']
})
export class WaitingQueuePage implements OnInit {
  public people: User[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.people = this.backendService.getUntriagedQueue();
  }
}
