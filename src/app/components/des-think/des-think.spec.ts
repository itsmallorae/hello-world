import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesThink } from './des-think';

describe('DesThink', () => {
  let component: DesThink;
  let fixture: ComponentFixture<DesThink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesThink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesThink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
