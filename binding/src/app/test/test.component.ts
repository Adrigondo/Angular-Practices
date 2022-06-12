import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      Hello {{user.name}}
      <br><br>
      Sum of 2 + 2 = {{2+2}}
      <br><br>
      Concatenate strings "{{user.name}}" + " is happy :)" = {{user.name+" is happy :)"}}
      <br><br>
      Lenght of word {{user.name}} = {{user.name.length}}
      <br><br>
      Sending a surprise to a rand user: the winner is {{getRandUser()}}
      <br><br>
      User url: {{siteURL}}
    </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public user={
    name: "Kakashi"
  };
  public users=[this.user, {name: "Sakura"}, {name: "Naruto"}, {name: "Sasuke"}, {name: "Yamato"}];
  public siteURL=window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  getRandUser(): string {
    var rand_user=this.users[Math.floor((Math.random()*this.users.length))];
    return rand_user.name;
  }
}
