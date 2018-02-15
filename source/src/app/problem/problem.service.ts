import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Problem} from './problem.model';
import {IdAware} from '../shared/id-aware.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProblemService {

    constructor(private http: HttpClient) {

    }

    create(problem: Problem): Observable<IdAware> {
        return this.http.post<IdAware>('http://localhost:4567/problems/', problem);
    }

    retrieveList(): Observable<Problem[]> {
        return this.http.get<Problem[]>('http://localhost:4567/problems/');
    }
}
