import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>简况</h3>
      <h4>{{data.name}}</h4>
      <p>{{data.bio}}</p>
      <strong>这是简况广告!</strong>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}
