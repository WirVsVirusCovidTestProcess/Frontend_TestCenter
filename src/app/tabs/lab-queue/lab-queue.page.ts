import { Component, OnInit } from '@angular/core';
import { User, BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-lab-queue',
  templateUrl: './lab-queue.page.html',
  styleUrls: ['./lab-queue.page.scss']
})
export class LabQueuePage implements OnInit {
  public people: User[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.people = this.backendService.getUntriagedQueue();
  }
}
