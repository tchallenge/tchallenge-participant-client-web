import {Component, Input, OnInit} from '@angular/core';
import {Problem} from '../problem.model';
import {ProblemService} from '../problem.service';
import {ProblemOption} from '../problem-option.model';
import {ProblemSnippet} from '../problem-snippet.model';

@Component({
    selector: 'app-problem-snippet',
    templateUrl: './problem-snippet.component.html',
    styleUrls: ['./problem-snippet.component.css']
})
export class ProblemSnippetComponent {

    @Input() snippet: ProblemSnippet;
    @Input() readonly: boolean;
}
