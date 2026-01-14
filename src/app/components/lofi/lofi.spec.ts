import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lofi } from './lofi';

describe('Lofi', () => {
  let component: Lofi;
  let fixture: ComponentFixture<Lofi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lofi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lofi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
