import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Workbook} from './workbook.model';
import {IdAware} from '../shared/id-aware.model';
import {HttpClient} from '@angular/common/http';
import {WorkbookInvoice} from './workbook-invoice.model';
import {ConfigurationService} from '../shared/configuration.service';

@Injectable()
export class WorkbookService {

    constructor(private http: HttpClient,
                private configurationService: ConfigurationService) {

    }

    create(workbook: WorkbookInvoice): Observable<IdAware> {
        const url = this.configurationService.getApiBaseUrl() + '/workbooks/';
        return this.http.post<IdAware>(url, workbook);
    }

    updateAssignmentSolution(id: string, index: number, solution: string): Observable<{}> {
        const data = {solution: solution};
        const url = this.configurationService.getApiBaseUrl() + '/workbooks/' + id + '/assignments/' + index;
        return this.http.put(url, data);
    }

    updateStatus(id: string, status: string): Observable<{}> {
        const data = {status: status};
        const url = this.configurationService.getApiBaseUrl() + '/workbooks/' + id + '/status';
        return this.http.put(url, data);
    }

    retrieveById(id: string): Observable<Workbook> {
        const url = this.configurationService.getApiBaseUrl() + '/workbooks/' + id;
        return this.http.get<Workbook>(url);
    }
}
