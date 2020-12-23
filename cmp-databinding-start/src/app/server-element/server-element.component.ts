import { element } from 'protractor';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit, AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {

  @Input() element: {type: string, name: string, content: string};

  @Input() name;


  constructor() {
    console.log('constructor is called!')
   }




  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit is caleld');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called');
  }


  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy is called');
  }





}
