import {Component, Input, OnInit} from '@angular/core';
import {Problem} from '../problem.model';

@Component({
    selector: 'app-problem-item',
    templateUrl: './problem-item.component.html',
    styleUrls: ['./problem-item.component.css']
})
export class ProblemItemComponent implements OnInit {

    @Input() problem: Problem;

    ngOnInit(): void {
    }
}
