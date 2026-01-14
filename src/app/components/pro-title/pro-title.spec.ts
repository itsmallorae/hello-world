import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTitle } from './pro-title';

describe('ProTitle', () => {
  let component: ProTitle;
  let fixture: ComponentFixture<ProTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
