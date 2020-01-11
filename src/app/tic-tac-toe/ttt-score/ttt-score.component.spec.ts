import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TttScoreComponent } from './ttt-score.component';

describe('TttScoreComponent', () => {
  let component: TttScoreComponent;
  let fixture: ComponentFixture<TttScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TttScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TttScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
