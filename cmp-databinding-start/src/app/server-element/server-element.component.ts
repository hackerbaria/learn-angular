import { element } from 'protractor';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

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



}
