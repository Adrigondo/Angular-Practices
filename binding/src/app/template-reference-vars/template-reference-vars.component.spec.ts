import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVarsComponent } from './template-reference-vars.component';

describe('TemplateReferenceVarsComponent', () => {
  let component: TemplateReferenceVarsComponent;
  let fixture: ComponentFixture<TemplateReferenceVarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferenceVarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReferenceVarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
