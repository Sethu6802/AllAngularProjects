import { AfterContentChecked, AfterViewChecked, Component, ContentChild, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pro-child',
  templateUrl: './pro-child.component.html',
  styleUrls: ['./pro-child.component.css']
})


export class ProChildComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy {

  @ContentChild('headlines')
  element !: ElementRef;

  show(){
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    console.log("Init Text....");
  }

  ngDoCheck(): void {
    console.log("Do Check Text....");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change Text.....");
  }

  ngAfterContentChecked(): void {
    console.log("After Content Checked Text....");
  }

  ngAfterViewChecked(): void {
    console.log("After View Checked Text....");
  }

  ngOnDestroy(): void {
    console.log("Destroy  Text.....");
  }

}