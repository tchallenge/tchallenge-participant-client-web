import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Workbook} from './workbook.model';
import {IdAware} from '../shared/id-aware.model';
import {HttpClient} from '@angular/common/http';
import {WorkbookInvoice} from './workbook-invoice.model';

@Injectable()
export class WorkbookService {

    constructor(private http: HttpClient) {

    }

    create(workbook: WorkbookInvoice): Observable<IdAware> {
        return this.http.post<IdAware>('http://localhost:4567/workbooks/', workbook);
    }

    updateAssignmentSolution(id: string, index: number, solution: string): Observable<{}> {
        const data = {solution: solution};
        return this.http.put('http://localhost:4567/workbooks/' + id + '/assignments/' + index, data);
    }

    updateStatus(id: string, status: string): Observable<{}> {
        const data = {status: status};
        return this.http.put('http://localhost:4567/workbooks/' + id + '/status', data);
    }

    retrieveById(id: string): Observable<Workbook> {
        return this.http.get<Workbook>('http://localhost:4567/workbooks/' + id);
    }
}
