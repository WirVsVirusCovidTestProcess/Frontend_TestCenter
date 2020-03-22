import { Component, OnInit, Input } from '@angular/core';
import { Appointment, Queue } from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public queue: typeof Queue = Queue;
  @Input()
  public people: Appointment[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}
  public buttonClick(person: Appointment) {
    this.router.navigateByUrl(`tabs/edit/${person.id}`);
  }
}
