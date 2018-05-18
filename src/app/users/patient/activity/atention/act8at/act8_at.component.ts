import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/atention/scriptAct8.js';

@Component({
  selector: 'app-act8-at',
  templateUrl: './act8_at.component.html',
  styleUrls: ['./act8_at.component.css', '../../activity.component.css']
})

export class Act8AtComponent implements OnInit {

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
        'la barra espaciadora con todas las letras excepto aparezca una X');
    }
}
