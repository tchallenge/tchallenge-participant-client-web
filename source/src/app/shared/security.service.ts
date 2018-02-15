import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SecurityToken} from './security-token.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SecurityService {

    private storage = localStorage;

    constructor(private http: HttpClient) {

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
        const observable = this.http.post<SecurityToken>('http://localhost:4567/security/tokens/', invoice);
        observable.subscribe(token => {
            this.storeTokenPayload(token.payload);
            done();
        }, () => fail());
    }

    logout(done): void {
        const observable = this.http.put('http://localhost:4567/security/tokens/current/delete', {});
        observable.subscribe(() => {this.removeTokenPayload(); done(); }, () => {this.removeTokenPayload();  done();});
    }

    signup(quickname: string, email: string, password: string): Observable<{}> {
        const invoice = {
            email: email,
            quickname: quickname,
            password: password,
            backlinkTemplate: 'http://localhost:4200/user-security-voucher?payload={{payload}}'
        };
        return this.http.post<SecurityToken>('http://localhost:4567/security/registrations/', invoice);
    }

    useVoucher(payload: string, done, fail) {
        const invoice = {
            method: 'VOUCHER',
            voucherPayload: payload,
        };
        const observable = this.http.post<SecurityToken>('http://localhost:4567/security/tokens/', invoice);
        observable.subscribe(token => {
            this.storeTokenPayload(token.payload);
            done();
        }, () => fail());
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
