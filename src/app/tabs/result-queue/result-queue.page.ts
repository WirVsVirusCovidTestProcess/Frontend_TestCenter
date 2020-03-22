import { Component, OnInit } from '@angular/core';
import { Appointment, BackendService, Queue } from 'src/app/services/backend.service';

@Component({
  selector: 'app-result-queue',
  templateUrl: './result-queue.page.html',
  styleUrls: ['./result-queue.page.scss']
})
export class ResultQueuePage implements OnInit {
  public people: Appointment[] = [];
  constructor(private backendService: BackendService) {}
  ngOnInit(): void {}
  ionViewDidEnter() {
    this.backendService.getAppointmentQueue().subscribe(p => {
      this.people = p.filter(p => p.queue === Queue.Result);
    });
  }
}
