import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/visiospacial/scriptAct8.js';

@Component({
  selector: 'app-act8-vs',
  templateUrl: './act8_vs.component.html',
  styleUrls: ['./act8_vs.component.css', '../../activity.component.css']
})

export class Act8VsComponent implements OnInit {

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
       'Tienes 60 segundos para la actividad , use las Flechas Arriba ↑, Abajo ↓, izquierda ← y Derecha → ' +
      ' para mover al caballero, cada vez que alcanze al monstruo se reiniciara su posicion.',
      );
    }
}
