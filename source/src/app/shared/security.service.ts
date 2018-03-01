import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SecurityToken} from './security-token.model';
import {Observable} from 'rxjs/Observable';
import {ConfigurationService} from './configuration.service';
import {Workbook} from '../workbook/workbook.model';

@Injectable()
export class SecurityService {

    private storage = localStorage;

    constructor(private http: HttpClient,
                private configurationService: ConfigurationService) {

    }

    isAuthenticated(): boolean {
        return this.loadTokenPayload() !== null;
    }

    getCurrentToken(): string {
        return this.loadTokenPayload();
    }

    login(email: string, password: string, done, fail): void {
        const invoice = {
            method: 'PASSWORD',
            email: email,
            password: password
        };
        const url = this.configurationService.getApiBaseUrl() + '/security/tokens/';
        const observable = this.http.post<SecurityToken>(url, invoice);
        observable.subscribe(token => {
            this.storeTokenPayload(token.payload);
            done();
        }, () => fail());
    }

    logout(done): void {
        const url = this.configurationService.getApiBaseUrl() + '/security/tokens/current/delete';
        const observable = this.http.put(url, {});
        observable.subscribe(() => {this.removeTokenPayload(); done(); }, () => {this.removeTokenPayload();  done();});
    }

    signup(quickname: string, email: string, password: string): Observable<{}> {
        const backlinkTemplate = this.configurationService.getClientBaseUrl() + '/use-security-voucher?payload={{payload}}';
        const invoice = {
            email: email,
            quickname: quickname,
            password: password,
            backlinkTemplate: backlinkTemplate
        };
        const url = this.configurationService.getApiBaseUrl() + '/security/registrations/';
        return this.http.post<SecurityToken>(url, invoice);
    }

    useVoucher(payload: string, done, fail) {
        const invoice = {
            method: 'VOUCHER',
            voucherPayload: payload,
        };
        console.log('used' + payload);
        const url = this.configurationService.getApiBaseUrl() + '/security/tokens/';
        const observable = this.http.post<SecurityToken>(url, invoice);
        observable.subscribe(token => {
            console.log('created' + token.payload);
            this.storeTokenPayload(token.payload);
            done();
        }, () => fail());
    }

    checkAccessToPreviousBook(): Observable<Workbook> {
        const url = this.configurationService.getApiBaseUrl() + '/workbooks/' + (this.storage.getItem('lastWorkbookId') || 'no-id');
        return this.http.get<Workbook>(url);
    }

    private loadTokenPayload(): string {
        return this.storage.getItem('security-token-payload');
    }

    private storeTokenPayload(payload: string): void {
        this.storage.setItem('security-token-payload', payload);
    }

    private removeTokenPayload(): void {
        this.storage.removeItem('security-token-payload');
    }
}
