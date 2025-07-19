import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionList } from './tuition-list';

describe('TuitionList', () => {
  let component: TuitionList;
  let fixture: ComponentFixture<TuitionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuitionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuitionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
