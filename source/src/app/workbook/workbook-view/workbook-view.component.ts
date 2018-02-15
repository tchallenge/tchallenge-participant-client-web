import {Component, Input, OnInit, ViewChildren} from '@angular/core';
import {WorkbookService} from '../workbook.service';
import {Workbook} from '../workbook.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Assignment} from '../assignment.model';
import {AssignmentComponent} from '../assignment/assignment.component';
import {SecurityService} from '../../shared/security.service';

@Component({
    selector: 'app-workbook-view',
    templateUrl: './workbook-view.component.html',
    styleUrls: ['./workbook-view.component.css']
})
export class WorkbookViewComponent implements OnInit {

    @Input() workbook: Workbook;

    corrects: number;
    total: number;

    @ViewChildren(Assignment) private assignmentComponents: AssignmentComponent;

    constructor(private route: ActivatedRoute,
                private workbookService: WorkbookService,
                private router: Router,
                private securityService: SecurityService) {

    }

    ngOnInit(): void {
        if (!this.securityService.isAuthenticated()) {
            this.router.navigate(['/login']);
            return;
        }
        this.route.params.subscribe((params) => {
            const workbookId = params['id'];
            this.reinit(workbookId);
        });
    }

    onSubmit(): void {
        this.workbookService.updateStatus(this.workbook.id, 'SUBMITTED').subscribe(() => {
            this.reinit(this.workbook.id);
            location.reload();
//            this.router.navigate(['workbooks/' + this.workbook.id + '?timestamp=x']);
        });
    }

    private reinit(id: string): void {
        this.corrects = 0;
        this.total = 0;
        this.workbookService.retrieveById(id).subscribe(workbook => {
            this.workbook = workbook;
            this.total = workbook.assignments.length;
            if (workbook.status === 'SUBMITTED') {
                workbook.assignments.forEach((a) => {
                    if (a.score === a.scoreMax) {
                        this.corrects++;
                    }
                });
            }
        });
    }
}
