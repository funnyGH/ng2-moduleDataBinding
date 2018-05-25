import { Component, OnInit, Pipe } from '@angular/core';
import { HEROES } from './heros';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  private oarray: any = [];
  private oobj: any = {};
  private nObj: any = {};
  private heroes: any[] = [];
  private canFly = true;
  private mutate = true;
  private title = 'demo';

  constructor() {
    this.oarray = ['arr1', 'arr2'];
    this.oobj = {'a': 'objectA'};
    this.nObj = {'b': 'objectB'};
    this.reset();
  }

  ngOnInit() {
  }

  get eventOn() {
    return 'go';
  }

  addHero (name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    const hero = {name, canFly: this.canFly};
    if (this.mutate) {
      this.heroes = this.heroes.concat(hero);
    } else {
      this.heroes.push(hero);
    }
  }

  reset () {
    this.heroes = HEROES.slice();
  }
}
