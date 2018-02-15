import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {SecurityService} from './security.service';

@Injectable()
export class SecurityGuard implements CanActivate {

    constructor(private authService: SecurityService) {}

    canActivate() {
        return this.authService.isAuthenticated();
    }
}
