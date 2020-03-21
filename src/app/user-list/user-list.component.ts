import { Component, OnInit, Input } from '@angular/core';
import { User } from '../services/backend.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input()
  public people: User[] = [];

  constructor() {}

  ngOnInit() {}
}
