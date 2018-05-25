import { Pipe, PipeTransform } from '@angular/core';

/**
 * @title：将多位数转换成汉字的算法
 * @author：liuyu
 * @date：2018/04/28
 * @rule：1、将数据按4位截取；2、根据当前四位的下标判断单位；
 * 默认返回值为个位
 */
@Pipe({ name: 'parseNumChineseAnother' })
export class ParseNumChineseAnotherPipe implements PipeTransform {
  private map_obj: any = {};
  private units = [];
  constructor() {
    this.map_obj = {
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
    this.units = ['', '十', '百', '千'];
  }

  transform (s: any, type: string): string {
    s = s * 1;
    if (!s || s <= 0) {
      return '';
    }
    if (type === 'arabian') {
      return s;
    } else if (type === 'chinese') {
      return this.parseChineseWord(s);
    } else {
      return s;
    }
  }

  // 将阿拉伯数字转换成中文
  parseChineseWord (number) {
    const num_str = String(number);
    const list = this.divisionNumStr(num_str);
    let result = '';
    list.forEach((el, index, array) => {
        let sub_str = this.subParseChineseWord(result, el);
        if (sub_str !== '零') {
            sub_str = sub_str.concat(this.bigUnitWithIndex(index, array.length));
        }
        result = result.concat(sub_str);
    });
    return result;
  }

  // 将数值按照4个一截取，生成数组
  divisionNumStr (num_str) {
    const list = new Array();
    const origin_count: number = num_str.length / 4;
    /*
    * 哈哈哈哈哈哈哈哈哈哈哈哈哈哈
    * 用过了JavaScript的 parseInt/parseFloat 取整，
    */
    // const count: number = parseInt(origin_count);  //typescript搞笑的报错
    const count: number = parseInt(String(origin_count));
    /**
     * 坑爹的泛型
     * let a:number = 1;
     * let b:string = <string><any> a;
     * console.log(typeof b)        ????
     */
    let begin_length = 0;
    if (origin_count !== count) {
        begin_length = num_str.length - count * 4;
        list.push(num_str.substr(0, begin_length));
    }
    for (let index = 0; index < count; index++) {
        list.push(num_str.substr(index * 4 + begin_length, 4));
    }
    return list;
  }

  prveIs0 (sub_str, index) {
    if (index === 0) {
      return false;
    }
    // return sub_str.substr(index - 1, index) === '0';
    return true;
  }

  unitIndexWithIndex (sub_str, index) {
      return sub_str.length - index - 1;
  }

  unitWithIndex (sub_str, index) {
      if (index === sub_str.length - 1) {
        return '';
      }
      return this.units[ this.unitIndexWithIndex (sub_str, index) ];
  }

  bigUnitWithIndex (index, count) {
      let bigUnits = [];
      if (count === 3) {
          bigUnits = ['', '万', '亿'];
      }
      if (count === 2) {
          bigUnits = ['', '万'];
      }
      if (count === 0) {
          return '';
      }
      return bigUnits[bigUnits.length - index - 1];
  }

  subParseChineseWord (result_str, sub_num_str) {
      let sub_result = '';
      for (let index = 0; index < sub_num_str.length; index++) {
          const element = sub_num_str.substr(index, 1);
          if (element === '0') {
              continue;
          }
          if (this.prveIs0(sub_num_str, index)) {
            if (index > 0 && sub_num_str.substr(index - 1, 1) * 1 === 0) {
                sub_result = sub_result.concat('零');
            }
          }
          sub_result = sub_result.concat(this.map_obj[element]).concat(this.unitWithIndex(sub_num_str, index));
      }
      if (sub_result.length === 0) {
          if (result_str.length > 0 && result_str.substr(result_str.length - 1, 1) === '零') {
              return '';
          }
          sub_result = '零';
      } else {
          if (sub_result.substr(0, 1) === '零' && (result_str.length > 0 && result_str.substr(result_str.length - 1, 1) === '零')) {
              return sub_result.substr(1, sub_result.length - 1);
          }
      }
      return sub_result;
  }

}
