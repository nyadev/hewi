import {Injectable} from '@angular/core';
import {session} from './session.model';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class sessionService{

    private sessionUrl: string;

    constructor(private http : Http){
      this.sessionUrl = urljoine(environment.apiUrl,'sessions');
    }

    getSessions(): Promise<void | session[] >{
      return this.http.get(this.sessionUrl)
        .toPromise()
        .then(response => response.json() as session[])
        .catch(this.handleError);
    }

    getSession(id): Promise<void | session> {
   const url = urljoin(this.sessionUrl, id);
   return this.http.get(url)
           .toPromise()
           .then(response => response.json() as session)
           .catch(this.handleError);
 }

    handleError(error: any){
      const errMsg = error.message? error.message:
      error.status ? `${error.status}-${error.statusText}`:'Server error';
      console.log(errMsg);
    }
}
