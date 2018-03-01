import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SecurityService} from '../shared/security.service';

@Component({
    selector: 'app-registered-view',
    templateUrl: './registered-view.component.html',
    styleUrls: ['./registered-view.component.css']
})
export class RegisteredViewComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private router: Router,
                private securityService: SecurityService) {

    }

    ngOnInit(): void {
    }

    onGotoLogin($event: Event): void {
        $event.preventDefault();
        this.router.navigate(['/login']);
    }
}
