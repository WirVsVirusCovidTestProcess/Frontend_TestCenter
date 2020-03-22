import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authGuardService: AuthGuardService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.match(new RegExp('appointment', 'i'))) {
      request = request.clone({
        setParams: {
          code: 'MJG2l8FFj7eZxi3tFUp3nltp3XQvbeWcqupfXpWGfjaCi85J0ZLpnQ=='
        }
      });
    } else {
      request = request.clone({
        setParams: {
          code: 'hM41ZqXlPp8kVnGgujM0daabAH0BQ46uDCX8y51XRPztfqn6CSMLAA=='
        }
      });
    }

    return next.handle(request);
  }
}
