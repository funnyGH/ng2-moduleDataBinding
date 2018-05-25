import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-construct-directive',
  templateUrl: './construct-directive.component.html',
  styleUrls: ['./construct-directive.component.css']
})
export class ConstructDirectiveComponent implements OnInit {
  private array = [];
  private oarray = {};
  private a = 2;
  private isShow = true;
  private show: any = true;
  private oas: any = true;

  // else
  // @ViewChild('elseBlock')
  // elseBlock: TemplateRef<any> = null;


  // ng-if-then-else
  thenBlock: TemplateRef<any> = null;
  @ViewChild('primaryBlock')
  primaryBlock: TemplateRef<any> = null;
  @ViewChild('secondaryBlock')
  secondaryBlock: TemplateRef<any> = null;

  constructor() {
    this.array = [
      {
        'id': 0,
        'value': '零'
      },
      {
        'id': 1,
        'value': '一'
      },
      {
        'id': 2,
        'value': '二'
      },
      {
        'id': 3,
        'value': '三'
      },
      {
        'id': 4,
        'value': '四'
      },
      {
        'id': 5,
        'value': '五'
      }
    ];
    this.oarray = {
      'list': [
        {
          'app': {
            'id': 11
          }
        },
        {
          'app': {
            'id': 22
          }
        },
        {
          'app': {
            'id': 33
          }
        }
      ]
    };
  }

  ngOnInit() {
    // ng-if-then-else
    this.thenBlock = this.primaryBlock;
  }

  fn () {
    return true;
  }

  btnClick (n) {
    if ( n === 1) {
      this.isShow = !this.isShow;
    } else {
      alert('事件解绑后还能触发？');
    }
  }

  // ng-if-then-else
  switchPrimary() {
    console.log( this.thenBlock === this.primaryBlock );
    this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
  }

  showModal (i) {
    alert(i);
  }
}
