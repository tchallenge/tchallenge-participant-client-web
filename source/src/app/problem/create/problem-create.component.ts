import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Problem} from '../problem.model';
import {ProblemService} from '../problem.service';
import {ProblemListComponent} from '../problem-list/problem-list.component';

@Component({
    selector: 'app-problem-create',
    templateUrl: './problem-create.component.html',
    styleUrls: ['./problem-create.component.css']
})
export class ProblemCreateComponent implements OnInit {

    @Output() problemAdded: EventEmitter<Object>;

    problem: Problem;

    categories: string[];
    difficulties: string[];
    expectations: string[];

    @ViewChild(ProblemListComponent) problemList: ProblemListComponent;

    constructor(private problemService: ProblemService) {

    }

    ngOnInit(): void {
        this.categories = ['JAVA', 'OOD', 'JAVASCRIPT'];
        this.difficulties = ['EASY', 'MODERATE', 'HARD', 'ULTIMATE'];
        this.expectations = ['SINGLE', 'MULTIPLE', 'TEXT', 'NUMBER'];
        this.problem = {
            categories: ['JAVA', 'OOD'],
            complexity: 5,
            difficulty: 'HARD',
            expectation: 'SINGLE',
            introduction: 'тест',
            question: 'Тест 3',
            options: [],
            snippets: []
        };
    }

    onAddOption(event: Event): void {
        event.preventDefault();
        this.problem.options.push({
            content: 'Test',
            correct: false
        });
    }

    onAddSnippet(event: Event): void {
        event.preventDefault();
        this.problem.snippets.push({
            content: '',
            style: 'COMMON'
        });
    }

    onSaveButtonClicked(event: Event): void {
        event.preventDefault();
        this.problemService.create(this.problem).subscribe((idAware) => {
            this.problemList.onProblemCreated();
            this.problemAdded.emit({});
        });
    }

    private reloadProblemList(): void {

    }
}
