import { Component } from '@angular/core';
import { Activity } from '../activity/activity.model';

const atencion = new Activity('atencion', 1);
const videoes = new Activity('videoespacial', 1);

@Component({
  selector: 'app-patient-navlist',
  templateUrl: './patient-navlist.component.html',
  styleUrls: ['./patient-navlist.component.css']
})
export class PatientNavlistComponent {
  activities: Activity[] = new Array(10).fill(atencion);
  activitiesv: Activity[] = new Array(10).fill(videoes);
}
