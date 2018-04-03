import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';

const url = './assets/scripts/atention/scriptAct2.js';

@Component({
  selector: 'app-actn-type',
  templateUrl: './actn.component.html',
  styleUrls: ['./actn.component.css']
})

export class ActnTypeComponent implements OnInit {

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
