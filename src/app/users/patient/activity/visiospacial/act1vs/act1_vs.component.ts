import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';

const url = './assets/scripts/visiospacial/scriptAct1.js';

@Component({
  selector: 'app-act1-vs',
  templateUrl: './act1_vs.component.html',
  styleUrls: ['./act1_vs.component.css']
})

export class Act1vsComponent implements OnInit {

    loadAPI: Promise<any>;

    public ngOnInit() {
        this.loadAPI = new Promise((resolve) => {
            this.loadScript();
        });
    }

    public loadScript() {
        const node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}
