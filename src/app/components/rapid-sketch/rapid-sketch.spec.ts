import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidSketch } from './rapid-sketch';

describe('RapidSketch', () => {
  let component: RapidSketch;
  let fixture: ComponentFixture<RapidSketch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidSketch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidSketch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
