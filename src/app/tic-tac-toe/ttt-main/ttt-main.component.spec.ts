import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TttMainComponent } from './ttt-main.component';

describe('TttMainComponent', () => {
  let component: TttMainComponent;
  let fixture: ComponentFixture<TttMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TttMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TttMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
