import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadcopComponent } from './badcop.component';

describe('BadcopComponent', () => {
  let component: BadcopComponent;
  let fixture: ComponentFixture<BadcopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadcopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadcopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
