import { Component, OnInit } from '@angular/core';
import { Activity } from './activity.model';

const url = './assets/scripts/scriptAct2.js';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit {

    loadAPI: Promise<any>;

    public ngOnInit() {
        this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript();
        });
    }

    public loadScript() {
        console.log('preparing to load...');
        const node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}
