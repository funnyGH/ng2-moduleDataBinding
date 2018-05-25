import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad.item';

@Component({
  selector: 'app-dynamic-component',
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
})
export class DynamicComponentComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {
    // console.log(AdItem);
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
