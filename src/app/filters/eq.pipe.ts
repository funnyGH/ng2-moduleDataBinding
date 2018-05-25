import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from '../components/pipe/heros';

/**
 * @title：管道参数化测试参数格式类型
 * @author：liuyu
 * @date：2018/05/22
 * @rule：
 */

@Pipe({ name: 'eqString' })
export class EqString implements PipeTransform {
  transform(value: any, args: string): any {
    return value + args;
  }
}

@Pipe({ name: 'eqArray' })
export class EqArray implements PipeTransform {
  transform(value: any, args: Array<any>): any {
    return value + JSON.stringify(args);
  }
}

@Pipe({ name: 'eqObject' })
export class EqObject implements PipeTransform {
  transform(value: any, args: object): any {
    const ob = JSON.parse(JSON.stringify(args));
    return value + ob.a;
  }
}

@Pipe({ name: 'eqFn' })
export class EqFn implements PipeTransform {
  transform(value: any, args: any): any {
    if (args === 'go') {
      return value + 'function';
    } else {
      return value + 'GG了。。。';
    }
  }
}

/**
 * @title：链式管道的测试
 * @author：liuyu
 * @date：2018/05/23
 * @rule：
 */
@Pipe({ name: 'toNumber' })
export class ToNumber implements PipeTransform {
  transform(value: any, args: any): any {
    return parseFloat(value);
  }
}

/**
 * @title：管道变更检测 测试
 * @author：liuyu
 * @date：2018/05/23
 * @rule：
 */
@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Flyer[]) {
    console.log(allHeroes);
    return allHeroes.filter(hero => hero.canFly);
  }
}

/**
 * @title：管道继承 测试
 * @author：liuyu
 * @date：2018/05/23
 * @rule：
 */
@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {
  transform(allHeroes: Flyer[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}
