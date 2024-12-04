import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListteacherComponent } from './listteacher.component';

describe('ListteacherComponent', () => {
  let component: ListteacherComponent;
  let fixture: ComponentFixture<ListteacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListteacherComponent]
    });
    fixture = TestBed.createComponent(ListteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
