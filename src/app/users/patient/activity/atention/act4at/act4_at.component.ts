import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/atention/scriptAct4.js';

@Component({
  selector: 'app-act4-at',
  templateUrl: './act4_at.component.html',
  styleUrls: ['./act4_at.component.css', '../../activity.component.css']
})

export class Act4AtComponent implements OnInit {

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
       'Aparecerá un estímulo en el centro de un color determinado (Rojo, Azul o Verde)' +
        'y forma determinado (Cuadrado, Círculo, Triángulo), en la siguiente pantalla aparecerá' +
        'una nueva figura de igual o diferente color y/o forma, el paciente deberá dar click a los botones dependiendo si' +
       'es el mismo o diferente. El estímulo cambiará hasta que el paciente haya dado una respuesta.');
    }
}
