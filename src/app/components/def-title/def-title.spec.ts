import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefTitle } from './def-title';

describe('DefTitle', () => {
  let component: DefTitle;
  let fixture: ComponentFixture<DefTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
