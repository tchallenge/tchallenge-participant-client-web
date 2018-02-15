import {Component, OnInit} from '@angular/core';
import {Problem} from '../problem.model';
import {ProblemService} from '../problem.service';

@Component({
    selector: 'app-problem-list',
    templateUrl: './problem-list.component.html',
    styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

    problems: Problem[];

    constructor(private problemService: ProblemService) {

    }

    ngOnInit(): void {
        this.reload();
    }

    onProblemCreated(): void {
        this.reload();
    }

    private reload(): void {
        this.problemService.retrieveList().subscribe(problems => this.problems = problems);
    }
}
