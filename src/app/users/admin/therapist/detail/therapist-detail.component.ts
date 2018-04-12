import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../../auth/user.model';
import { Router } from '@angular/router';
import { ConsultService } from '../consult/consult.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-therapist-detail',
  templateUrl: './therapist-detail.component.html',
  styleUrls: ['./therapist-detail.component.css'],
  providers: [ ConsultService ]
})

export class TherapistDetailComponent implements OnInit, OnDestroy {

  therapist?: User;
  loading = true;
  sub: any;

  constructor(
    private consultService: ConsultService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.consultService
      .getTherapist(params.curp)
      .then((therapist: User) => {
        this.therapist = therapist;
        this.loading = false;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
