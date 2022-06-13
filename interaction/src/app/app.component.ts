import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interaction';
  public isNew = "yes";
  public status = "not loggin";
  public name="";

  setTitle(name:string):void{
    this.name=name;
  }

  loggin(){
    this.status = "loggin";
  }
  unloggin(){
    this.status = "not loggin";
  }
}
