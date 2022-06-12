import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  public user={
    name: "Yamato"
  }
  public successClass="text--success"
  public isSpecial=true;
  public hasError=false;
  public messageClasses={
    "text--special": this.isSpecial,
    "text--error": this.hasError,
    "text--success": !this.hasError
  }

  constructor() { }

  ngOnInit(): void {
  }

  setSpecial(): void {
    this.isSpecial=!this.isSpecial;
    this.messageClasses['text--special']=this.isSpecial;
  }
  setError(): void {
    this.hasError=!this.hasError;
    this.messageClasses['text--error']=this.hasError;
    this.messageClasses['text--success']=!this.hasError;
  }
}
