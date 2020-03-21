import { Component, OnInit } from '@angular/core';
import { User, BackendService, Queue } from 'src/app/services/backend.service';

@Component({
  selector: 'app-untriaged-queue',
  templateUrl: './untriaged-queue.page.html',
  styleUrls: ['./untriaged-queue.page.scss']
})
export class UntriagedQueuePage implements OnInit {
  public people: User[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.backendService.getUntriagedQueue().subscribe(p => {
      this.people = p.filter(p => p.queue === Queue.Untriaged);
    });
  }
}
