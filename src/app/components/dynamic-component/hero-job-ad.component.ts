import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h3>广告</h3>
      <h4>{{data.headline}}</h4>
      <p>{{data.body}}</p>
      <strong>这是日常广告!</strong>
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}
