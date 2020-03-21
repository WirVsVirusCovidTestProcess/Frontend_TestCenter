import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(private mockAuthService: AuthGuardService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.mockAuthService.authenticate();
    this.router.navigateByUrl('');
  }
}
