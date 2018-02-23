import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {HttpClient} from '@angular/common/http';
import {ForumEvent} from './event.model';
import {EventSearchResult} from './event-search-result.model';
import {Specialization} from './specialization.model';
import {ConfigurationService} from '../shared/configuration.service';

@Injectable()
export class EventService {

    constructor(private http: HttpClient,
                private configurationService: ConfigurationService) {

    }

    retrieveById(id: string): Observable<ForumEvent> {
        const url = this.configurationService.getApiBaseUrl() + '/events/';
        return this.http.get<ForumEvent>(url + id);
    }

    searchByPermalink(permalink: string): Observable<EventSearchResult> {
        const url = this.configurationService.getApiBaseUrl() + '/events/?permalink=' + permalink;
        return this.http.get<EventSearchResult>(url);
    }

    retrieveSpecializations(): Observable<Specialization[]> {
        const url = this.configurationService.getApiBaseUrl() + '/specializations/';
        return this.http.get<Specialization[]>(url);
    }
}
