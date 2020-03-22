import { Component, OnInit } from '@angular/core';
import { Appointment, BackendService, Queue } from 'src/app/services/backend.service';

@Component({
  selector: 'app-waiting-queue',
  templateUrl: './waiting-queue.page.html',
  styleUrls: ['./waiting-queue.page.scss']
})
export class WaitingQueuePage implements OnInit {
  public people: Appointment[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.backendService.getAppointmentQueue().subscribe(p => {
      this.people = p.filter(p => p.queue === Queue.Waiting);
    });
  }
}
