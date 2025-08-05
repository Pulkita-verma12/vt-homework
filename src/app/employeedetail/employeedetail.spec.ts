import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeedetail } from './employeedetail';

describe('Employeedetail', () => {
  let component: Employeedetail;
  let fixture: ComponentFixture<Employeedetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeedetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeedetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
