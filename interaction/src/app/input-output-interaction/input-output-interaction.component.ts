import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-interaction',
  templateUrl: './input-output-interaction.component.html',
  styleUrls: ['./input-output-interaction.component.css']
})
export class InputOutputInteractionComponent implements OnInit {

  @Input("dataParent") public status="";
  @Output() public childrenEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  setTitle(name:string){
    this.childrenEvent.emit(name);
  }
}
