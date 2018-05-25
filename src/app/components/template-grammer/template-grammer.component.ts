import { Component, OnInit, Injectable } from '@angular/core';
import { AppModule } from '../../app.module';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-grammer',
  templateUrl: './template-grammer.component.html',
  styleUrls: ['./template-grammer.component.css']
})
export class TemplateGrammerComponent implements OnInit {
  private odata: any;
  constructor(private http: Http) {
    this.odata = {};
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('assets/templateGrammer.json')
    .map(res => res.json())
    .subscribe(res => {
      this.odata = res;
    });
  }
}
