import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTttComponent } from './game-ttt.component';

describe('GameTttComponent', () => {
  let component: GameTttComponent;
  let fixture: ComponentFixture<GameTttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
