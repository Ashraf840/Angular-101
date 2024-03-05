import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  // REQUIRE TO REGISTER INTO APP.MODULE'S PROVIDERS SECTION
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Request Interceptor:", request);
    // We cannot modify the original "request", rather we can clone it & then modify it.
    let modRequest = request.clone({
      headers: new HttpHeaders({
        authorization: 'eoriuwoeiruoiuwer-updated'
      }),
    }); // Since "request" is a dictionary, we can directly access & modify the "headers" key-value pair in this way.
    return next.handle(modRequest);  // This will actually send the requests to the server from now on. (prerequisite: register this interceptor into the app.module's providers section)
  }
}
