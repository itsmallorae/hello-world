import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralContent } from './general-content';

describe('GeneralContent', () => {
  let component: GeneralContent;
  let fixture: ComponentFixture<GeneralContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
