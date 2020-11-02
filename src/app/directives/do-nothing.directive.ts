import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appDoNothing]'
})
export class DoNothingDirective implements OnInit, OnDestroy {

  @Input('color')
  color: string;

  constructor(
    private ref: ElementRef
  ) {
    console.log('DoNothingDirective');
    console.log(ref);
  }

  ngOnInit(): void {
    // (this.ref.nativeElement as HTMLDivElement).innerHTML
    //   = 'modified from appDoNothing';
    console.log(this.color);

  }

  @HostListener('dblclick')
  public handleDblClick(event: Event) {
    console.log('dblclick');
    (this.ref.nativeElement as HTMLDivElement).style.background = this.color;

  }

  ngOnDestroy(): void {
  }


}
