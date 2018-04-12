import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import swal from 'sweetalert';

const url = './assets/scripts/visiospacial/nombredeJS.js';

@Component({
  selector: 'app-act7-vs',
  templateUrl: './act7_vs.component.html',
  styleUrls: ['./act7_vs.component.css', '../../activity.component.css']
})

export class Act7VsComponent implements OnInit {

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
