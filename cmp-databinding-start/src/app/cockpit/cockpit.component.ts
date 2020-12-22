import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //serverElements = [];
  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueServerCreated = new EventEmitter<{serverName: string, serverContent: string}>();


  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    console.log('onAddServer is called: ' + this.newServerName);
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: serverContentInput.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.blueServerCreated.emit({serverName: serverNameInput.value, serverContent: serverContentInput.value});
  }
}
