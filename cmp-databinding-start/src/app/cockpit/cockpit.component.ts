import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueServerCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('servernameInput') serverName: ElementRef;
  @ViewChild('serverContentInput') serverContent: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: this.serverName.nativeElement.value, serverContent: this.serverContent.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.blueServerCreated.emit({serverName: this.serverName.nativeElement.value, serverContent: this.serverContent.nativeElement.value});
  }
}
