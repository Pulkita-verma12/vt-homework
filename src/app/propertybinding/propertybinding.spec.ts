import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propertybinding } from './propertybinding';

describe('Propertybinding', () => {
  let component: Propertybinding;
  let fixture: ComponentFixture<Propertybinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Propertybinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Propertybinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
