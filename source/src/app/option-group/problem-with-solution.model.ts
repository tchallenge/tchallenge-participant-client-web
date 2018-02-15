import {Problem} from '../problem/problem.model';

export interface ProblemWithSolution {

    problem: Problem;
    solution?: string;
}
