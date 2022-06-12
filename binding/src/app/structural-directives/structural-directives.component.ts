import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  public check=false;
  public option="";
  public guests:string[]=[];
  private num_guests=0;

  constructor() { }

  ngOnInit(): void {
  }

  addGuest(name:string):void{
    this.guests[this.num_guests]=name;
    this.num_guests++;
  }

  removeGuest(name:string):void{
    for( var i = 0; i < this.guests.length; i++){                            
      if ( this.guests[i] === name) { 
        this.guests.splice(i, 1); 
        break;
      }
    }
    this.num_guests--;
  }
}
