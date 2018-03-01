import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SecurityService} from '../shared/security.service';

@Component({
    selector: 'app-voucher-handle-view',
    templateUrl: './voucher-handle-view.component.html',
    styleUrls: ['./voucher-handle-view.component.css']
})
export class VoucherHandleViewComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private router: Router,
                private securityService: SecurityService) {

    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            const payload = params['payload'];
            console.log(payload);
            this.securityService.useVoucher(payload, () => this.leave(), () => this.leave());
        });
    }

    private leave(): void {
        this.router.navigate(['/']);
    }
}
