import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbStat } from './prob-stat';

describe('ProbStat', () => {
  let component: ProbStat;
  let fixture: ComponentFixture<ProbStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProbStat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbStat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
