import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpContent } from './emp-content';

describe('EmpContent', () => {
  let component: EmpContent;
  let fixture: ComponentFixture<EmpContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
