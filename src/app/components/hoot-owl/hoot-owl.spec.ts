import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HootOwl } from './hoot-owl';

describe('HootOwl', () => {
  let component: HootOwl;
  let fixture: ComponentFixture<HootOwl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HootOwl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HootOwl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
