import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const page = '2';
    const limit = '120';
    //const created = '1'

    return next.handle(request.clone({setHeaders: {'app-id' : '630a758491b126acb900b768'}, setParams: {page, limit}}));
  }
}
