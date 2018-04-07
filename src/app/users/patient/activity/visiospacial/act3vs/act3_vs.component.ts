import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/visiospacial/scriptAct3vs.js';

@Component({
  selector: 'app-act3-vs',
  templateUrl: './act3_vs.component.html',
  styleUrls: ['./act3_vs.component.css', '../../activity.component.css']
})

export class Act3VsComponent implements OnInit {

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
      'Se muestra una imagen del cuerpo humano, se podra interactuar con ella, al momento de dar ' +
      'click con el  mouse encima de cada parte del cuerpo, y aparecerá el nombre de dicha parte.');
    }
}
