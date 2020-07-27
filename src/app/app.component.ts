import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = ''
  
servers= [{
  'serverName' : 'Andrew Server',
  'serverType' : 'Testing',
  'serverStatus' : 'offline',
  'serverCreated' : new Date ("12, 02, 2020"),
  'cost': 40
},
{
  'serverName' : 'Thomson Server',
  'serverType' : 'Staging',
  'serverStatus' : 'online',
  'serverCreated' : new Date ("12, 02, 2020"),
  'cost': 40
},
{
  'serverName' : 'Thor Server',
  'serverType' : 'Devlopment',
  'serverStatus' : 'offline',
  'serverCreated' : new Date ("12, 02, 2020"),
  'cost': 40
},
{
  'serverName' : 'Lily Server',
  'serverType' : 'Production',
  'serverStatus' : 'offline',
  'serverCreated' : new Date ("12, 02, 2020"),
  'cost': 40
}]

ngOnInit(){
  
}

addServer(){
 let server = {
  'serverName' : 'new Server',
  'serverType' : 'Production',
  'serverStatus' : 'offline',
  'serverCreated' : new Date ("12, 02, 2020"),
  'cost': 40
 } 
 this.servers.push(server);
}

}