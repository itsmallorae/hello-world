import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpContent2 } from './emp-content-2';

describe('EmpContent2', () => {
  let component: EmpContent2;
  let fixture: ComponentFixture<EmpContent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpContent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpContent2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
