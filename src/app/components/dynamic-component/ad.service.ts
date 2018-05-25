import { Injectable } from '@angular/core';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad.item';

@Injectable()
export class AdService {
  getAds() {
    // console.log(AdItem);
    return [
      new AdItem(HeroProfileComponent, {name: '德玛西亚', bio: '英勇奋战没脑子'}),
      new AdItem(HeroProfileComponent, {name: '赵信', bio: '三进三出无敌手'}),
      new AdItem(HeroJobAdComponent, {headline: '租房/买房',
                                        body: '别看了，你租不起!'}),
      new AdItem(HeroJobAdComponent,   {headline: 'iPhone 18',
                                        body: '今日特价：iPhone 18 只卖18元！'}),
    ];
  }
}
