import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/visiospacial/scriptAct11.js';

@Component({
  selector: 'app-act11-vs',
  templateUrl: './act11_vs.component.html',
  styleUrls: ['./act11_vs.component.css', '../../activity.component.css']
})

export class Act11VsComponent implements OnInit {

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
    'El paciente deberá unir las partes que complementan a la imagen.',
    );
    }
}
