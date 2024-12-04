import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSessionComponent } from './edit-session.component';

describe('EditSessionComponent', () => {
  let component: EditSessionComponent;
  let fixture: ComponentFixture<EditSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSessionComponent]
    });
    fixture = TestBed.createComponent(EditSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
