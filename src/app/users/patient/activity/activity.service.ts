import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Activity } from './activity.model';
import { environment } from '../../../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ActivityService {

    private activityUrl: string;

    constructor(private http: Http) {
      this.activityUrl = urljoin(environment.apiUrl, 'activity');
    }

    addActivity(activity: Activity) {
       const body = JSON.stringify(activity);
       const headers = new Headers({ 'Content-Type': 'application/json' });
       const token = this.getToken();

       return this.http.post(this.activityUrl + token, body, { headers })
       .map((response: Response) => response.json())
       .catch((error: Response) => Observable.throw(error.json()));
     }

    getActivity(curp): Promise<void | Activity[] > {
      const url = urljoin(this.activityUrl, curp);
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Activity[])
        .catch(this.handleError);
    }

    handleError(error: any) {
      const errMsg = error.message ? error.message :
      error.status ? `${error.status}-${error.statusText}` : 'Server error';
      console.log(errMsg);
    }

    getToken() {
      const token = localStorage.getItem('token');
      return `?token=${token}`;
    }
}
