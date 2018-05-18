import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/atention/scriptAct7.js';

@Component({
  selector: 'app-act7-at',
  templateUrl: './act7_at.component.html',
  styleUrls: ['./act7_at.component.css', '../../activity.component.css']
})

export class Act7AtComponent implements OnInit {

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
    'Aparecerán letras aleatoriamente, el paciente deberá apretar' +
    'la barra espaciadora cada vez que aparezca la letra “X”, siempre y cuando antes aparezca una “A”.');
    }
}
