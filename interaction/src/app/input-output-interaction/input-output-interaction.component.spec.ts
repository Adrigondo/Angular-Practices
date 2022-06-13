import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputInteractionComponent } from './input-output-interaction.component';

describe('InputOutputInteractionComponent', () => {
  let component: InputOutputInteractionComponent;
  let fixture: ComponentFixture<InputOutputInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
