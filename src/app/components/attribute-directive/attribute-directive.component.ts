import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  // private color = 'yellow';   // 中级
  private color = '';    // 高级
  constructor() { }

  ngOnInit() {
  }

}
