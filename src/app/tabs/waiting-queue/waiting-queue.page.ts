import { Component, OnInit } from '@angular/core';
import { User, BackendService, Queue } from 'src/app/services/backend.service';

@Component({
  selector: 'app-waiting-queue',
  templateUrl: './waiting-queue.page.html',
  styleUrls: ['./waiting-queue.page.scss']
})
export class WaitingQueuePage implements OnInit {
  public people: User[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.backendService.getUntriagedQueue().subscribe(p => {
      this.people = p.filter(p => p.queue === Queue.Waiting);
    });
  }
}
