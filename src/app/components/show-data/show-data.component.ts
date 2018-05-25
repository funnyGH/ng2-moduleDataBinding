import { Component, OnInit, Injectable } from '@angular/core';
import { AppModule } from '../../app.module';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  private odata: any;
  constructor(private http: Http) {
    this.odata = {};
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('assets/showdata.json')
    .map(res => res.json())
    .subscribe(res => {
      this.odata = res;
    });
  }
}
