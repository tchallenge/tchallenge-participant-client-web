import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Problem} from './problem.model';
import {IdAware} from '../shared/id-aware.model';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '../shared/configuration.service';

@Injectable()
export class ProblemService {

    constructor(private http: HttpClient,
                private configurationService: ConfigurationService) {

    }

    create(problem: Problem): Observable<IdAware> {
        const url = this.configurationService.getApiBaseUrl() + '/problems/';
        return this.http.post<IdAware>(url, problem);
    }

    retrieveList(): Observable<Problem[]> {
        const url = this.configurationService.getApiBaseUrl() + '/problems/';
        return this.http.get<Problem[]>(url);
    }
}
