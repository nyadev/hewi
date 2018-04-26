import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/atention/scriptAct1.js';

@Component({
  selector: 'app-act1-at',
  templateUrl: './act1_at.component.html',
  styleUrls: ['./act1_at.component.css', '../../activity.component.css']
})

export class Act1AtComponent implements OnInit {

    loadAPI: Promise<any>;

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
       'Se mostrará aleatoreamente en la pantalla un círulo negro o uno rojo durante un tiempo determinado' +
       ',el paciente dará clic izquierdo cada vez que aparezca el círculo rojo');
    }
}
