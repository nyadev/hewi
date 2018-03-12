import { Injectable } from '@angular/core';
import { Session } from './session.model';
import { Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {

    private sessionUrl: string;

    constructor(private http: Http) {
      this.sessionUrl = urljoin(environment.apiUrl, 'sessions');
    }

    getSessions(): Promise<void | Session[] > {
      return this.http.get(this.sessionUrl)
        .toPromise()
        .then(response => response.json() as Session[])
        .catch(this.handleError);
    }

    getSession(id): Promise<void | Session> {
   const url = urljoin(this.sessionUrl, id);
   return this.http.get(url)
           .toPromise()
           .then(response => response.json() as Session)
           .catch(this.handleError);
 }

    handleError(error: any) {
      const errMsg = error.message ? error.message :
      error.status ? `${error.status}-${error.statusText}` : 'Server error';
      console.log(errMsg);
    }
}
