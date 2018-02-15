import {Component, Input, OnInit} from '@angular/core';
import {Problem} from '../problem.model';
import {ProblemService} from '../problem.service';
import {ProblemOption} from '../problem-option.model';

@Component({
    selector: 'app-problem-option',
    templateUrl: './problem-option.component.html',
    styleUrls: ['./problem-option.component.css']
})
export class ProblemOptionComponent {

    @Input() option: ProblemOption;
    @Input() readonly: boolean;
}
