import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'Test server', content:'hello'},
  {type:'blueprint', name:'blueprint server', content:'hello blueprint'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    console.log('onServerAdded appcomponent is called: ' + serverData.serverName);
    this.serverElements.push({type:'server', name: serverData.serverName, content: serverData.serverContent});

  }
  onBlueServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({type:'blueprint', name: serverData.serverName, content: serverData.serverContent});
  }

}
