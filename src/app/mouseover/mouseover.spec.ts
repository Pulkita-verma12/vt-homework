import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mouseover } from './mouseover';

describe('Mouseover', () => {
  let component: Mouseover;
  let fixture: ComponentFixture<Mouseover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mouseover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mouseover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
