import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eg-demo',
  templateUrl: './eg-demo.component.html',
  styleUrls: ['./eg-demo.component.css']
})
export class EgDemoComponent implements OnInit {
  private objs: any;
  constructor() {
    this.objs = {
      'propertyA': {
        'description': 'this is the propertyA',
        'default': 'sth'
      },
      'propertyB': {
        'description': 'this is the propertyB',
        'default': 'sth'
      }
    };
  }

  ngOnInit() {
  }

}
