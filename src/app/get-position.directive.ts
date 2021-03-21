import { Directive, ElementRef ,HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appGetPosition]'
})

export class GetPositionDirective {

  @Input() idi : boolean;
  n : number = 0; 

  constructor(private el: ElementRef) {}

  /*@HostListener('mouseenter') onmouseenter(){
    this.highlight('pink');
  }*/

  @HostListener('mousemove') onmousemove(){
    //let id : string = this.el.nativeElement.id;
   
  }
}
