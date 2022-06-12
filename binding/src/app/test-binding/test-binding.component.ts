import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.css']
})
export class TestBindingComponent implements OnInit {
  public user={
    name: "Hinata"
  };
  public attribute_value="";
  public property_value="";
  public isDisable=false;

  constructor() { }

  ngOnInit(): void {
  }

  /*
  Is not the same an HTML attribute than a DOM property :
  - The attribute initialize the property
  - The attribute doesn't change after it is initialized, the property however can change
  */
  @ViewChild("name") input_name: ElementRef | undefined;
  getAttributeValue():void{
    let component=this.input_name;
    if(component==undefined){
      return;
    }
    let value=component.nativeElement.getAttribute('value');
    this.attribute_value=value;
    console.log(value);
    return;
  }

  getPropertyValue():void{
    let component=this.input_name;
    if(component==undefined){
      return;
    }
    let value=component.nativeElement.value;
    this.property_value=value;
    console.log(value);
    return;
  }

  disableInput():void{
    this.isDisable=!this.isDisable;
  }
}
