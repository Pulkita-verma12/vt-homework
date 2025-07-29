import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classbinding } from './classbinding';

describe('Classbinding', () => {
  let component: Classbinding;
  let fixture: ComponentFixture<Classbinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Classbinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Classbinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
