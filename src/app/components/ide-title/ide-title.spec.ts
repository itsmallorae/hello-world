import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeTitle } from './ide-title';

describe('IdeTitle', () => {
  let component: IdeTitle;
  let fixture: ComponentFixture<IdeTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
