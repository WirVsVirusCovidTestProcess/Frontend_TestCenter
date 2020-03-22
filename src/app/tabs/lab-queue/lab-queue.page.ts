import { Component, OnInit } from '@angular/core';
import { Appointment, BackendService, Queue } from 'src/app/services/backend.service';

@Component({
  selector: 'app-lab-queue',
  templateUrl: './lab-queue.page.html',
  styleUrls: ['./lab-queue.page.scss']
})
export class LabQueuePage implements OnInit {
  public people: Appointment[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit() {
    this.backendService.getAppointmentQueue().subscribe(p => {
      this.people = p.filter(p => p.queue === Queue.Lab);
    });
  }
}
