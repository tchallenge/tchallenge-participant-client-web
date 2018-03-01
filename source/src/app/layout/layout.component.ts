import {Component} from '@angular/core';
import {SecurityService} from '../shared/security.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

    constructor(private securityService: SecurityService,
                private router: Router) {

    }

    isAuthenticated() {
        return this.securityService.isAuthenticated();
    }

    onHome(): void {
        this.router.navigate(['/']);
    }

    onLogout(): void {
        this.securityService.logout(() => this.router.navigate(['login']));
    }
}
