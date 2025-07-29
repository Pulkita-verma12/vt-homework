import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifElse } from './ngif-else';

describe('NgifElse', () => {
  let component: NgifElse;
  let fixture: ComponentFixture<NgifElse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifElse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifElse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
