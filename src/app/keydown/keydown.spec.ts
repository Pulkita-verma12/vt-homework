import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Keydown } from './keydown';

describe('Keydown', () => {
  let component: Keydown;
  let fixture: ComponentFixture<Keydown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keydown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Keydown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
