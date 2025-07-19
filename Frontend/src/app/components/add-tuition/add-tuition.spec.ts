import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTuition } from './add-tuition';

describe('AddTuition', () => {
  let component: AddTuition;
  let fixture: ComponentFixture<AddTuition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTuition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTuition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
