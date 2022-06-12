import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestInlineTemplateComponent } from './test-inline-template/test-inline-template.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestInlineTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
