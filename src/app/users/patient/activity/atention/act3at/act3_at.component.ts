import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/atention/scriptAct3.js';

@Component({
  selector: 'app-act3-at',
  templateUrl: './act3_at.component.html',
  styleUrls: ['./act3_at.component.css', '../../activity.component.css']
})

export class Act3AtComponent implements OnInit {

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
