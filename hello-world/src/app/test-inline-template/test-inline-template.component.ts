import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-inline-template',
  template: `
    <div class="inline-component">
      Added an inline template component
    </div>
  `,
  styles: [`
    .inline-component {
      color: darksalmon;
      font-size: 18px !important;
    }
  `]
})
export class TestInlineTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
