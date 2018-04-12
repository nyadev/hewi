import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/visiospacial/scriptAct10.js';

@Component({
  selector: 'app-act10-vs',
  templateUrl: './act10_vs.component.html',
  styleUrls: ['./act10_vs.component.css', '../../activity.component.css']
})

export class Act10VsComponent implements OnInit {

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
      // swal('Instrucciones',
      // 'Pegar aquí las instrucciones');
    }
}
