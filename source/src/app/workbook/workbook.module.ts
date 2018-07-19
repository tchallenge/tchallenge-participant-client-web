import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {QRCodeModule} from 'angularx-qrcode';

import {MaterialModule} from '../material/material.module';
import {SharedModule} from '../shared/shared.module';
import {ProblemModule} from '../problem/problem.module';
import {WorkbookService} from './workbook.service';
import {AssignmentComponent} from './assignment/assignment.component';
import {WorkbookViewComponent} from './workbook-view/workbook-view.component';
import {OptionGroupComponent} from '../option-group/option-group.component';

@NgModule({
    imports: [
        BrowserModule,
        QRCodeModule,
        MaterialModule,
        SharedModule,
        ProblemModule
    ],
    declarations: [
        WorkbookViewComponent,
        AssignmentComponent,
        OptionGroupComponent
    ],
    exports: [
    ],
    providers: [
        WorkbookService
    ]
})
export class WorkbookModule {

}
