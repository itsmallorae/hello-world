import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wireframes } from './wireframes';

describe('Wireframes', () => {
  let component: Wireframes;
  let fixture: ComponentFixture<Wireframes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wireframes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wireframes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
