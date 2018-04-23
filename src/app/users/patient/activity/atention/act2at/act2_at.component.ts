import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import swal from 'sweetalert';
import { AuthService } from '../../../../../auth/auth.service';
import { ActivityService } from '../../activity.service';
import { Title } from '@angular/platform-browser';

const url = './assets/scripts/atention/scriptAct2.js';

@Component({
  selector: 'app-act2-at',
  templateUrl: './act2_at.component.html',
  styleUrls: ['./act2_at.component.css', '../../activity.component.css'],
  providers: [ AuthService, ActivityService ]
})

export class Act2AtComponent implements OnInit {

    loadAPI: Promise<any>;
    activityForm: FormGroup;

    constructor (
      private authService: AuthService,
      private activityService: ActivityService,
      private title: Title) {}

    ngOnInit() {
        this.title.setTitle('Actividad 2 Atención');
        this.loadAPI = new Promise((resolve) => {
            this.loadScript();
        });

        this.instructions();

        this.activityForm = new FormGroup({
          aciertos: new FormControl(null, []),
          errores: new FormControl(null, []),
          level: new FormControl(null, [])
        });
    }

    onSubmit() {
      const { aciertos, errores, level } = this.activityForm.value;
      console.log(this.activityForm.value);
      const activity = new Activity(
        this.authService.currentUser.curp,
        0,
        2,
        +level,
        null,
        +aciertos,
        +errores,
        null
      );

      this.activityService
      .addActivity(activity)
      .subscribe(
        a => console.log(a),
        error => console.log(error)
      );
    }

    loadScript() {
        const node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
        console.log('charged');
    }

    instructions() {
     swal('Instrucciones',
     'Se mostrará una serie de estímulos aleatorios donde deberás seleccionar con el cursor el estímulo indicado durante cierto tiempo');
    }
}
