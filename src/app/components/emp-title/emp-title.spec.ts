import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTitle } from './emp-title';

describe('EmpTitle', () => {
  let component: EmpTitle;
  let fixture: ComponentFixture<EmpTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
