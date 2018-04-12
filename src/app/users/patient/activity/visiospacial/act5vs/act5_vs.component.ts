import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/visiospacial/scriptAct5.js';

@Component({
  selector: 'app-act5-vs',
  templateUrl: './act5_vs.component.html',
  styleUrls: ['./act5_vs.component.css', '../../activity.component.css']
})

export class Act5VsComponent implements OnInit {

    loadAPI: Promise<any>;

    ngOnInit() {
        this.loadAPI = new Promise((resolve) => {
            this.loadScript();
        });
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
      'Aparece una letra grande (H o S) conformada por otras más pequeñas (H o S),' +
      'el objetivo es identificar la mayor cantidad de letras pequeñas (H o S) indicada antes de iniciar la actividad,' +
       'haciendo click en el boton Corrrecto de lo contrario dar click en el boton Incorrecto.'
      );
    }
}
