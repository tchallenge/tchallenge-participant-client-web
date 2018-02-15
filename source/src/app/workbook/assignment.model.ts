import {Problem} from '../problem/problem.model';
import {ProblemWithSolution} from '../option-group/problem-with-solution.model';

export class Assignment implements ProblemWithSolution {

    index?: number;
    problem: Problem;
    score: number;
    scoreMax: number;
    solution?: string;
}
