import { Component, OnInit } from '@angular/core';
import { Activity } from '../../activity.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const url = './assets/scripts/atention/scriptAct2.js';

@Component({
  selector: 'app-act2-at',
  templateUrl: './act2.component.html',
  styleUrls: ['./act2.component.css']
})

export class Act2AtentionComponent implements OnInit {

    loadAPI: Promise<any>;
    activityForm: FormGroup;

    public ngOnInit() {
        this.loadAPI = new Promise((resolve) => {
            this.loadScript();
        });

        // this.activityForm = new FormGroup({
        //   corrects: new FormControl(null, []),
        //   fails: new FormControl(null, []),
        //   level: new FormControl(null, [])
        // });
    }

    public loadScript() {
        const node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    // public Save() {
    //   if (this.activityForm.valid) {
    //     const { corrects, fails, level } = this.activityForm.value;
    //     console.log(`${corrects} ${fails} ${level}`);
    //   }
    // }
}
