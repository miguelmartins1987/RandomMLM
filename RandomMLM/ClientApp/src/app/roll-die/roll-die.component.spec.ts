import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollDieComponent } from './roll-die.component';

describe('RollDieComponent', () => {
  let component: RollDieComponent;
  let fixture: ComponentFixture<RollDieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollDieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollDieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
