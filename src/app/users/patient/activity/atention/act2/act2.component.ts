import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';

const url = './assets/scripts/atention/scriptAct2.js';

@Component({
  selector: 'app-act2-at',
  templateUrl: './act2.component.html',
  styleUrls: ['./act2.component.css', '../../activity.component.css']
})

export class Act2AtComponent implements OnInit {

    loadAPI: Promise<any>;
    activityForm: FormGroup;

    ngOnInit() {
        this.loadAPI = new Promise((resolve) => {
            this.loadScript();
        });

       this.instructions();
    }

    loadScript() {
        const node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

     instructions() {
       swal('Instrucciones',
       'Se mostrará una serie de estímulos aleatorios donde deberás seleccionar con el cursor el estímulo indicado durante cierto tiempo');
     }
}
