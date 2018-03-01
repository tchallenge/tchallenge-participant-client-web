import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {SharedModule} from './shared/shared.module';
import {ProblemModule} from './problem/problem.module';
import {AppRoutingModule} from './app-routing.module';
import {LayoutComponent} from './layout/layout.component';
import {WorkbookModule} from './workbook/workbook.module';
import {EventModule} from './event/event.module';
import {AuthInterceptorService} from './shared/auth-interceptor.service';
import {LoginViewComponent} from './login/login-view.component';
import {SignupViewComponent} from './signup/signup-view.component';
import {VoucherHandleViewComponent} from './voucher-handle-view/voucher-handle-view.component';
import {RegisteredViewComponent} from './registered/registered-view.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        LoginViewComponent,
        RegisteredViewComponent,
        SignupViewComponent,
        VoucherHandleViewComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        AppRoutingModule,
        EventModule,
        ProblemModule,
        WorkbookModule,
        SharedModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
