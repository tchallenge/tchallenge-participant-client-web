import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SecurityService} from '../shared/security.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Workbook} from '../workbook/workbook.model';

@Component({
    selector: 'app-login-view',
    templateUrl: './login-view.component.html',
    styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

    email: string;
    password: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private securityService: SecurityService) {

    }

    ngOnInit(): void {
        if (this.securityService.isAuthenticated()) {
            this.leave();
        }
    }

    onLogin($event: Event): void {
        $event.preventDefault();
        this.securityService.login(this.email, this.password, () => {
            this.leave();
        }, () => {
            alert('Указанные данные учетной записи не верны');
        });
    }

    onNoAccountClicked($event: Event): void {
        $event.preventDefault();
        this.router.navigate(['/signup']);
    }

    private leave(): void {
        this.securityService
            .checkAccessToPreviousBook()
            .subscribe((w) => this.router.navigate(['/workbooks/' + w.id]), () => this.router.navigate(['/']));
    }
}
