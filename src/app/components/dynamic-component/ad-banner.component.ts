import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, ViewContainerRef } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad.item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
              <div class="ad-banner">
                <h3>在广告条中显示一系列不同的广告</h3>
                <ng-template appAd></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex: any = -1;
  @ViewChild(AdDirective) adHost: AdDirective; // 方案1
  // @ViewChild('adhost', { read: ViewContainerRef}) adHost: ViewContainerRef;   // 方案2
  interval: any;

  constructor(private cfr: ComponentFactoryResolver) {
    // console.dir(AdItem);
  }

  ngOnInit() {
    // console.dir(AdItem);
    // console.dir(this.ads);
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const cf = this.cfr.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;  // 方案1
    viewContainerRef.clear();   // 方案1
    const componentRef = viewContainerRef.createComponent(cf);   // 方案1
    // this.adHost.clear();   // 方案2
    // const componentRef = this.adHost.createComponent(cf);   // 方案2
    // console.log(componentRef);
    (<AdComponent>componentRef.instance).data = adItem.data;
    // console.log(<AdComponent>componentRef.instance);
    // console.log(componentRef.instance);
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 300000);
  }
}
