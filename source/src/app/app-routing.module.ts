import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {WorkbookViewComponent} from './workbook/workbook-view/workbook-view.component';
import {EventViewComponent} from './event/event-view/event-view.component';
import {LoginViewComponent} from './login/login-view.component';
import {SignupViewComponent} from './signup/signup-view.component';
import {VoucherHandleViewComponent} from './voucher-handle-view/voucher-handle-view.component';
import {SecurityGuard} from './shared/security.guard';
import {ProblemCreateComponent} from './problem/create/problem-create.component';
import {RegisteredViewComponent} from './registered/registered-view.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {   path: '',
                redirectTo: 'events/joker2017',
                pathMatch: 'full'
            },
            {
                path: 'problems',
                component: ProblemCreateComponent
            },
            {
                path: 'events/:permalink',
                component: EventViewComponent
            },
            {
                path: 'workbooks/:id',
                component: WorkbookViewComponent
            },
            {
                path: 'login',
                component: LoginViewComponent
            },
            {
                path: 'registered',
                component: RegisteredViewComponent
            },
            {
                path: 'signup',
                component: SignupViewComponent
            },
            {
                path: 'use-security-voucher',
                component: VoucherHandleViewComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'events/joker2017'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: false})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
