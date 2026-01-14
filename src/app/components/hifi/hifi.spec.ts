import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hifi } from './hifi';

describe('Hifi', () => {
  let component: Hifi;
  let fixture: ComponentFixture<Hifi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hifi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hifi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
