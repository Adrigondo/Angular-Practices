import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-vars',
  templateUrl: './template-reference-vars.component.html',
  styleUrls: ['./template-reference-vars.component.css']
})
export class TemplateReferenceVarsComponent implements OnInit {
  public greeting="";
  public name_2="";

  constructor() { }

  ngOnInit(): void {
  }

  sendGreet(name:string):void{
    this.greeting="Hello "+name+"!";
  }
}
