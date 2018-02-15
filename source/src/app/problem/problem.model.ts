import {ProblemOption} from './problem-option.model';
import {ProblemSnippet} from './problem-snippet.model';

export class Problem {

    id?: string;
    categories: string[];
    complexity: number;
    difficulty: string;
    expectation: string;
    introduction?: string;
    options?: ProblemOption[];
    question: string;
    snippets?: ProblemSnippet[];
    status?: string;
}
