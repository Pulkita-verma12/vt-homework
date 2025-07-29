import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyup } from './keyup';

describe('Keyup', () => {
  let component: Keyup;
  let fixture: ComponentFixture<Keyup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keyup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Keyup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
