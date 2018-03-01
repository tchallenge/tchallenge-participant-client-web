import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SecurityService} from '../shared/security.service';

@Component({
    selector: 'app-signup-view',
    templateUrl: './signup-view.component.html',
    styleUrls: ['./signup-view.component.css']
})
export class SignupViewComponent implements OnInit {

    quickname: string;
    email: string;
    password: string;
    passwordTwice: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private securityService: SecurityService) {

    }

    ngOnInit(): void {
        if (this.securityService.isAuthenticated()) {
            this.leave();
        }
    }

    onSignup($event: Event): void {
        $event.preventDefault();
        if (this.password !== this.passwordTwice) {
            alert('Пароли не совпадают');
            return;
        }
        this.securityService.signup(this.quickname, this.email, this.password).subscribe(() => {
            this.router.navigate(['/registered']);
        }, () => {
            alert('Произошла ошибка. Пожалуйста, повторите попытку позже');
        });
    }

    onHasAccountClicked($event: Event): void {
        $event.preventDefault();
        this.router.navigate(['/login']);
    }

    private leave(): void {
        this.router.navigate(['/']);
    }
}
