import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AuthInterceptorService} from './auth-interceptor.service';
import {SecurityService} from './security.service';
import {SecurityGuard} from './security.guard';
import {ConfigurationService} from './configuration.service';

@NgModule({
    imports: [
        FormsModule,
        HttpClientModule,
        RouterModule
    ],
    exports: [
        FormsModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [
        AuthInterceptorService,
        ConfigurationService,
        SecurityService,
        SecurityGuard
    ],
})
export class SharedModule {

}
