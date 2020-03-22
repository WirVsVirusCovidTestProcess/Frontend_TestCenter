import { Component, OnInit } from '@angular/core';
import { Appointment, BackendService, Queue } from 'src/app/services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit {
  public appointment: Appointment;
  public queue: typeof Queue = Queue;
  public date: string = new Date().toUTCString();
  constructor(
    private backendService: BackendService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(params => {
      let id = params.get('id');
      if (id == null) {
        this.router.navigateByUrl('tabs');
      }
      this.backendService.getAppointmentQueue().subscribe(p => {
        this.appointment = p.filter(u => u.id.toString() === id)[0];
      });
    });
  }
  public updateTime(event: any) {
    // this.date = event.event
  }
  public assignTime() {
    this.backendService.updateAppointment({
      ...this.appointment,
      dateToBeInTestcenter: this.date
    });
  }
}
