import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mouseleave } from './mouseleave';

describe('Mouseleave', () => {
  let component: Mouseleave;
  let fixture: ComponentFixture<Mouseleave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mouseleave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mouseleave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
