import { Pipe, PipeTransform } from '@angular/core';

/**
 * @title：将多位数转换成汉字的算法
 * @author：liuyu
 * @date：2018/04/28
 * @rule：1、十以内直接转换；2、万及亿以上的考虑连续0的问题；
 * 默认返回值为个位
 */
@Pipe({ name: 'parseNumChinese' })
export class ParseNumChinesePipe implements PipeTransform {
  private map_obj: any = {};
  private units = [];
  private newArray: any; // 整合后的新数组
  private isZero: boolean; // 判断上一个添加的是否为零
  private resValue: string; // 管道的返回值
  constructor() {
    this.map_obj = {
      '0': '零',
      '1': '一',
      '2': '二',
      '3': '三',
      '4': '四',
      '5': '五',
      '6': '六',
      '7': '七',
      '8': '八',
      '9': '九'
    };
    this.units = [
      '',
      '十',
      '百',
      '千',
      '万',
      '十',
      '百',
      '千',
      '亿',
      '十',
      '百',
      '千',
      '万'
    ];
    this.newArray = [];
    this.isZero = false;
    this.resValue = '';
  }

  transform(s: any, type: string): string {
    s = s * 1;
    if (!s || s <= 0) {
      return '';
    }
    if (type === 'arabian') {
      return s;
    } else if (type === 'chinese') {
      return this.isChiese(s);
    } else {
      return s;
    }
  }

  // 判断当前index是否在万、亿，4和8的倍数
  isMultiple(i, val) {
    const y = i % 4;
    const x = i % 8;
    if (this.isZero) {
      // 前一位为零
      if (y === 0 && x !== 0) {
        // 仅是4的倍数取万
        return '万';
      } else if (i >= 8 && x === 0) {
        // 仅是8的倍数取亿
        return '亿';
      } else {
        // 不正常情况返回空
        return '';
      }
    } else {
      // 第一次为零进入
      this.isZero = true;
      if (y === 0 && x !== 0) {
        // 仅是4的倍数取万
        return '万';
      } else if (i >= 8 && x === 0) {
        // 仅是8的倍数取亿
        return '亿';
      } else {
        // 不正常情况返回空
        return val;
      }
    }
  }
  // 当type == Chinese时，fn
  isChiese(num) {
    const os = num + '';
    const os_arr = os.split('').reverse(); // 字符串分割后数组反转
    this.newArray = [];
    this.resValue = '';
    for (let index = 0, j = os_arr.length; index < j; index++) {
      if (os_arr[index] === '0') {
        const oval = this.isMultiple(index, this.map_obj[os_arr[index]]);
        this.newArray.push(oval);
      } else {
        os_arr[index] = this.map_obj[os_arr[index]] + this.units[index];
        this.newArray.push(os_arr[index]);
        this.isZero = false;
      }
    }

    if (this.newArray[0] === '零') {
      this.newArray[0] = '';
    }
    for (const ostr of this.newArray.reverse()) {
      this.resValue += ostr;
    }
    return this.resValue ? this.resValue : '';
  }
}
