import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/visiospacial/scriptAct1.js';

@Component({
  selector: 'app-act1-vs',
  templateUrl: './act1_vs.component.html',
  styleUrls: ['./act1_vs.component.css', '../../activity.component.css']
})

export class Act1VsComponent implements OnInit {

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
      'Presiona el boton para iniciar la animación, puedes incrementar la velocidad de la animacion');
    }
}
