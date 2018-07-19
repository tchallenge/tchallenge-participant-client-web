import {Component, Input} from '@angular/core';
import {WorkbookService} from '../workbook.service';
import {Assignment} from '../assignment.model';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

    @Input() last: boolean;
    @Input() assignment: Assignment;
    @Input() classified: boolean;
    @Input() workbookId: string;

    constructor(private workbookService: WorkbookService) {

    }
}
