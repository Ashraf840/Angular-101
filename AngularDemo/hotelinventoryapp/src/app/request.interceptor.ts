import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  // REQUIRE TO REGISTER INTO APP.MODULE'S PROVIDERS SECTION
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Request Interceptor:", request);
    return next.handle(request);  // This will actually send the requests to the server from now on. (prerequisite: register this interceptor into the app.module's providers section)
  }
}
