import { Component, OnInit } from '@angular/core';
import { Appointment, BackendService, Queue } from 'src/app/services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit {
  public appointment: Appointment;
  public queue: typeof Queue = Queue;
  public date: string = new Date().toUTCString();
  public trackingId = '';
  constructor(
    private backendService: BackendService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id == null) {
        this.router.navigateByUrl('tabs');
      }
      this.backendService.getAppointmentQueue().subscribe(p => {
        this.appointment = p.filter(u => u.id.toString() === id)[0];
        console.log(this.appointment);
      });
    });
  }
  public assignTime() {
    this.backendService.updateAppointment({
      ...this.appointment,
      dateToBeInTestcenter: this.date,
      assigned: true
    });
    this.back();
  }

  public submitTrackingId() {
    this.backendService.updateAppointment({
      ...this.appointment,
      trackingId: this.trackingId
    });
    this.back();
  }

  public submitTestResult(result: boolean) {
    this.backendService.updateAppointment({
      ...this.appointment,
      testResult: result
    });
    this.back();
  }

  back() {
    this._location.back();
  }
}
