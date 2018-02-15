import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {HttpClient} from '@angular/common/http';
import {ForumEvent} from './event.model';
import {EventSearchResult} from './event-search-result.model';
import {Specialization} from './specialization.model';

@Injectable()
export class EventService {

    constructor(private http: HttpClient) {

    }

    retrieveById(id: string): Observable<ForumEvent> {
        return this.http.get<ForumEvent>('http://localhost:4567/events/' + id);
    }

    searchByPermalink(permalink: string): Observable<EventSearchResult> {
        return this.http.get<EventSearchResult>('http://localhost:4567/events/?permalink=' + permalink);
    }

    retrieveSpecializations(): Observable<Specialization[]> {
        return this.http.get<Specialization[]>('http://localhost:4567/specializations/');
    }
}
