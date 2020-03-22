import { Component, OnInit } from '@angular/core';
import { Appointment, BackendService, Queue } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-queue',
  templateUrl: './lab-queue.page.html',
  styleUrls: ['./lab-queue.page.scss']
})
export class LabQueuePage implements OnInit {
  public people: Appointment[] = [];
  public showScanner: boolean = false;
  constructor(private backendService: BackendService, private router: Router) {}
  ngOnInit(): void {}
  ionViewDidEnter() {
    this.backendService.getAppointmentQueue().subscribe(p => {
      this.people = p.filter(p => p.queue === Queue.Lab);
    });
  }

  scanned(str: any) {
    this.router.navigateByUrl(`/tabs/edit/${this.people[0].id}`);
    console.log(str);
  }

  toggleScanner() {
    this.showScanner = !this.showScanner;
  }
}
