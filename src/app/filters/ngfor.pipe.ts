import { Pipe, PipeTransform } from '@angular/core';

/**
 * @title：*ngFor遍历对象
 * @author：liuyu
 * @date：2018/05/08
 * @rule：1、简单对象；2、层级对象；
 */

@Pipe({ name: 'ObjNgFor' })
export class ObjNgFor implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value);
    // return Object.keys(value).map(key => value[key]);
  }
}
