import { Injectable } from '@angular/core';
import { User } from '../../../../auth/user.model';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConsultService {

    private patientUrl: string;

    constructor(private http: Http) {
      this.patientUrl = urljoin(environment.apiUrl, 'user/patients');
    }

    getPatients(): Promise<void | User[] > {
      return this.http.get(this.patientUrl)
        .toPromise()
        .then(response => response.json() as User[])
        .catch(this.handleError);
    }

    getPatient(curp): Promise<void | User > {
      const url = urljoin(this.patientUrl, curp);
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as User)
        .catch(this.handleError);
    }

    handleError(error: any) {
      const errMsg = error.message ? error.message :
      error.status ? `${error.status}-${error.statusText}` : 'Server error';
      console.log(errMsg);
    }
}
