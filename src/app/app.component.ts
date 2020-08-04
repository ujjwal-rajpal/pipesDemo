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
  'cost': 40,
  'imageUrl': ''
},
{
  'serverName' : 'Thomson Server',
  'serverType' : 'Staging',
  'serverStatus' : 'online',
  'serverCreated' : new Date ("12, 02, 2020"),
  'cost': 40,
  'imageUrl': ''
},
{
  'serverName' : 'Thor Server',
  'serverType' : 'Devlopment',
  'serverStatus' : 'offline',
  'serverCreated' : new Date ("12, 02, 2020"),
  'cost': 40,
  'imageUrl': ''
},
{
  'serverName' : 'Lily Server',
  'serverType' : 'Production',
  'serverStatus' : 'offline',
  'serverCreated' : new Date ("12, 02, 2020"),
  'cost': 40,
  'imageUrl': ''
}]

ngOnInit(){
  
}
filteredStatus = '';

addServer(){
 let server = {
  'serverName' : 'new Server',
  'serverType' : 'Production',
  'serverStatus' : 'offline',
  'serverCreated' : new Date ("12, 02, 2020"),
  'cost': 40,
  'imageUrl': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
 } 
 this.servers.push(server);
}

}