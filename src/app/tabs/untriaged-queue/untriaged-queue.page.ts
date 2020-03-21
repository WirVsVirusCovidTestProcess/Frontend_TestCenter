import { Component, OnInit } from '@angular/core';
import { User, BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-untriaged-queue',
  templateUrl: './untriaged-queue.page.html',
  styleUrls: ['./untriaged-queue.page.scss']
})
export class UntriagedQueuePage implements OnInit {
  public people: User[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.people = this.backendService.getUntriagedQueue();
  }
}
