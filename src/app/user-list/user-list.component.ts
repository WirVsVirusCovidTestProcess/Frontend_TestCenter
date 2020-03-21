import { Component, OnInit, Input } from '@angular/core';
import { User } from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input()
  public people: User[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}
  public buttonClick(person: User) {
    this.router.navigateByUrl(`tabs/edit/${person.id}`);
  }
}
