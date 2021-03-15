import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioprimeroComponent } from './formularioprimero.component';

describe('FormularioprimeroComponent', () => {
  let component: FormularioprimeroComponent;
  let fixture: ComponentFixture<FormularioprimeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioprimeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioprimeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
