import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTitle } from './test-title';

describe('TestTitle', () => {
  let component: TestTitle;
  let fixture: ComponentFixture<TestTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
