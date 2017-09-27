import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodcopComponent } from './goodcop.component';

describe('GoodcopComponent', () => {
  let component: GoodcopComponent;
  let fixture: ComponentFixture<GoodcopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodcopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodcopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
