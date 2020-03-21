import { Component, OnInit } from '@angular/core';
import { User, BackendService, Queue } from 'src/app/services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit {
  public appointment: User;
  public queue: typeof Queue = Queue;
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
      this.backendService.getUntriagedQueue().subscribe(p => {
        this.appointment = p.filter(u => u.id.toString() === id)[0];
      });
    });
  }
}
