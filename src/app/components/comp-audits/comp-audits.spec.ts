import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAudits } from './comp-audits';

describe('CompAudits', () => {
  let component: CompAudits;
  let fixture: ComponentFixture<CompAudits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompAudits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompAudits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
