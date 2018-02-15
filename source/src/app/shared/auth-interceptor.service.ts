import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SecurityService} from './security.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private securityService: SecurityService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.securityService.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `BEARER ` + this.securityService.getCurrentToken()
                }
            });
        }
        return next.handle(request);
    }
}
