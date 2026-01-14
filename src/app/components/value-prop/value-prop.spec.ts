import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueProp } from './value-prop';

describe('ValueProp', () => {
  let component: ValueProp;
  let fixture: ComponentFixture<ValueProp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueProp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueProp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
