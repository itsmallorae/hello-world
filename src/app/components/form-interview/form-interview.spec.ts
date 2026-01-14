import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInterview } from './form-interview';

describe('FormInterview', () => {
  let component: FormInterview;
  let fixture: ComponentFixture<FormInterview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInterview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInterview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
