import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatOptionModule, MatCardModule,
    MatRadioModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule
    ], exports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule
    ]
})
export class MaterialModule {

}
