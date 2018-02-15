import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {MaterialModule} from '../material/material.module';
import {ProblemService} from './problem.service';
import {ProblemCreateComponent} from './create/problem-create.component';
import {ProblemListComponent} from './problem-list/problem-list.component';
import {ProblemItemComponent} from './problem-item/problem-item.component';
import {ProblemOptionComponent} from './problem-option/problem-option.component';
import {ProblemSnippetComponent} from './problem-snippet/problem-snippet.component';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [
        ProblemCreateComponent,
        ProblemListComponent,
        ProblemItemComponent,
        ProblemOptionComponent,
        ProblemSnippetComponent
    ],
    exports: [
        ProblemItemComponent
    ],
    providers: [
        ProblemService
    ]
})
export class ProblemModule {

}
