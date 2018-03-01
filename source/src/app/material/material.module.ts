import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatOptionModule, MatCardModule,
    MatRadioModule, MatToolbarModule, MatListModule, MatDividerModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatInputModule,
        MatListModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatToolbarModule,
    ], exports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatInputModule,
        MatListModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatToolbarModule,
    ]
})
export class MaterialModule {

}
