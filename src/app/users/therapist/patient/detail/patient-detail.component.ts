import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../../auth/user.model';
import { AuthService } from '../../../../auth/auth.service';
import { Router } from '@angular/router';
import { ConsultService } from '../consult/consult.service';
import { ActivatedRoute } from '@angular/router';
import { Activity } from '../../../patient/activity/activity.model';
import { ActivityService } from '../../../patient/activity/activity.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
  providers: [ ConsultService, ActivityService, AuthService ]
})

export class PatientDetailComponent implements OnInit, OnDestroy {
  activities: Activity[];
  patient?: User;
  loading = true;
  curp: string;
  sub: any;

  constructor(
    private consultService: ConsultService,
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.consultService
      .getPatient(params.curpp)
      .then((patient: User) => {
        this.patient = patient;
        this.loading = false;
      });
    });
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.activityService
      .getActivity(params.curpp)
      .then((activities: Activity[]) => {
        this.activities = activities;
        this.loading = false;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
