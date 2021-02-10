import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRandomStringComponent } from './generate-random-string.component';

describe('GenerateRandomStringComponent', () => {
  let component: GenerateRandomStringComponent;
  let fixture: ComponentFixture<GenerateRandomStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateRandomStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateRandomStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
