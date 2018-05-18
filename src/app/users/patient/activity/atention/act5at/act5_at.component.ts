import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/atention/scriptAct5.js';

@Component({
  selector: 'app-act5-at',
  templateUrl: './act5_at.component.html',
  styleUrls: ['./act5_at.component.css', '../../activity.component.css']
})

export class Act5AtComponent implements OnInit {

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
      'Aparecerán números del 1 al 9 aleatoriamente en la pantalla con duración de un segundo, después' +
       'de ciertos estímulos aparecerá una pantalla con los números del 1 al 9 y el paciente deberá' +
        'dar click en el orden en él que aparecieron los estímulos, tendrá dos intentos para realizarlos correctamente'
    );
    }
}
