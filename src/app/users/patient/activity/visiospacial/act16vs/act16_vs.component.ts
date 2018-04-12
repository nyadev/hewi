import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/visiospacial/scriptAct16.js';

@Component({
  selector: 'app-act16-vs',
  templateUrl: './act16_vs.component.html',
  styleUrls: ['./act16_vs.component.css', '../../activity.component.css']
})

export class Act16VsComponent implements OnInit {

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
        'Aparecerán círculos que se iluminarán, el niño deberá seleccionar el que corresponde en el cuadro derecho.');
    }
}
