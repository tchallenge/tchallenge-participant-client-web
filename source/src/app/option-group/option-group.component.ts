import {Component, Input, OnInit} from '@angular/core';
import {WorkbookService} from '../workbook/workbook.service';
import {ProblemWithSolution} from './problem-with-solution.model';

@Component({
    selector: 'app-option-group',
    templateUrl: './option-group.component.html',
    styleUrls: ['./option-group.component.css']
})
export class OptionGroupComponent implements OnInit {

    @Input() problemWithSolution: ProblemWithSolution;
    @Input() assignmentIndex: number;
    @Input() workbookId: string;
    @Input() classified: boolean;

    flags: boolean[];

    constructor(private workbookService: WorkbookService) {

    }

    onOptionChanged(index: number): void {
        const i = index - 1;
        if (this.problemWithSolution.problem.expectation === 'SINGLE') {
            this.resetFlags();
            this.flags[i] = true;
        } else {
            this.flags[i] = !this.flags[i];
        }
        const s = this.stringifyFlags();
        this.workbookService.updateAssignmentSolution(this.workbookId, this.assignmentIndex, s).subscribe(() => console.log(s));
    }

    ngOnInit(): void {
        this.flags = [];
        const solution = this.problemWithSolution.solution;
        console.log(solution);
        this.problemWithSolution.problem.options.forEach((o, i) => {
            let b = false;
            if (solution) {
                b = solution.charAt(i) !== '0';
            }
            this.flags.push(b);
        });
    }

    private resetFlags(): void {
        this.flags.fill(false);
    }

    private stringifyFlags(): string {
        const r: number[] = [];
        this.flags.forEach((b) => r.push(b ? 1 : 0));
        return r.join('');
    }
}
