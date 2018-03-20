import { Injectable } from '@angular/core';
import { Session } from './session.model';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SessionService {

    private sessionUrl: string;
    dateTest: string = new Date().toLocaleDateString();

    constructor(private http: Http) {
      this.sessionUrl = urljoin(environment.apiUrl, 'sessions');
    }

    getSessions(): Promise<void | Session[] > {
      return this.http.get(this.sessionUrl)
        .toPromise()
        .then(response => response.json() as Session[])
        .catch(this.handleError);
    }

    getSession(): Promise<void | Session[]> {
      return this.http.get(this.sessionUrl)
           .toPromise()
           .then(response => response.json() as Session[])
           .catch(this.handleError);
 }

 addSession(session : Session){
    const body=JSON.stringify(session);
    const headers = new Headers({ 'Content-Type': 'application/json' })

    return this.http.post(this.sessionUrl, body, { headers })
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json()))
 }

    handleError(error: any) {
      const errMsg = error.message ? error.message :
      error.status ? `${error.status}-${error.statusText}` : 'Server error';
      console.log(errMsg);
    }
}
