import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private isFolder: boolean;   // 展开或者收缩
  private n: number;    // 动态绑定div的class，控制ul收缩
  private val: string;   // 底部’展开‘/’收缩‘
  constructor() {
    this.isFolder = false;
    this.n = 0;
    this.val = '收缩';
  }

  ngOnInit() {
  }

  toggleSlide(e) {
    if (this.isFolder) {
      this.isFolder = false;
      this.n = 0;
      this.val = '收缩';
    } else {
      this.isFolder = true;
      this.n = 1;
      this.val = '展开';
    }
  }
}
