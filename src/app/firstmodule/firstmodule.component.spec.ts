import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstmoduleComponent } from './firstmodule.component';

describe('FirstmoduleComponent', () => {
  let component: FirstmoduleComponent;
  let fixture: ComponentFixture<FirstmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
