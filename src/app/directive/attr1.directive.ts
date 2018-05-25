import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AttrDirective {
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';  // 初级
  }

  // 中级
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }

  // 高级
  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
